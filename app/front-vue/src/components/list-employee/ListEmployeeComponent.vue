<template>
  <v-app>
    <v-container>
      <div>
        <h3 class="text-center">List All Employees</h3>
        <v-data-table
          :headers="headers"
          :items="employees"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="success">
              <router-link
                :to="{ name: 'update', params: { id: employees.employee_id } }"
              >
                <font-awesome-icon :icon="['fas', 'user-edit']" />Edit
              </router-link>
            </v-btn>
            <v-btn color="error">
              <font-awesome-icon :icon="['fas', 'trash']" />Delete
            </v-btn>
          </template>
        </v-data-table>
        <!-- <table style="width: 100%; text-align: center">
          <thead>
            <tr>
              <th class="text-center">Employee Name</th>
              <th class="text-center">Jor Role</th>
              <th class="text-center">Birth</th>
              <th class="text-center">Employee Registration</th>
              <th class="text-center">Email</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, key) in employees" :key="key">
              <td>{{ employee.name }}</td>
              <td>{{ employee.job_role }}</td>
              <td>{{ employee.birth }}</td>
              <td>{{ employee.employee_registration }}</td>
              <td>{{ employee.email }}</td>
              <td>
                <v-btn color="success">
                  <router-link
                    :to="{ name: 'update', params: { id: employee._id } }"
                  >
                    <font-awesome-icon :icon="['fas', 'user-edit']" />Edit
                  </router-link>
                </v-btn>
              </td>
              <td>
                <v-btn color="error">
                  <font-awesome-icon :icon="['fas', 'trash']" />Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </v-container>
  </v-app>
</template>

<script>
import EmployeeServices from "@/services/EmployeeServices";

export default {
  name: "ListEmployeeComponent",
  data() {
    return {
      employees: [],
      headers: [
        { text: "Employee Name", value: "name" },
        { text: "Jor Role", value: "job_role" },
        { text: "Birth", value: "birth" },
        { text: "Employee Registration", value: "employee_registration" },
        { text: "Email", value: "email" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  mounted() {
    this.listAllEmployees();
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeServices.getEmployees();
      this.employees = response;
    },
  },
};
</script>
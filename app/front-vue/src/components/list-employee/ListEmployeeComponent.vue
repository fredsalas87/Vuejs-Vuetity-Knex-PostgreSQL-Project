<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="createEmployee" color="primary">
            <font-awesome-icon
              :icon="['fas', 'user-plus']"
              class="mr-2"
            />Employee
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn color="error" @click="logout"
            ><font-awesome-icon
              :icon="['fas', 'fa-sign-out']"
              class="mr-2"
            />Logout</v-btn
          >
        </v-col>
      </v-row>
        <h3 class="text-center mb-5 mt-5">List All Employees</h3>
        <table style="width: 100%; text-align: center">
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
              <td>{{ employee.birth | birthDate }}</td>
              <td>{{ employee.employee_registration }}</td>
              <td>{{ employee.email }}</td>
              <td>
                <v-btn color="success" class="mr-3">
                  <router-link
                    :to="{
                      name: 'update',
                      params: { id: employee.employee_id },
                    }"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'user-edit']"
                      color="white"
                      class="mr-2"
                    />Edit
                  </router-link>
                </v-btn>
                <v-btn
                  @click="removeEmployee(employee.employee_id)"
                  color="error"
                >
                  <font-awesome-icon
                    :icon="['fas', 'trash']"
                    class="mr-2"
                  />Delete
                </v-btn>
              </td>
              <!-- <td></td> -->
            </tr>
          </tbody>
        </table>
    </v-container>
  </v-app>
</template>

<script src='./ListEmployees.js'></script>
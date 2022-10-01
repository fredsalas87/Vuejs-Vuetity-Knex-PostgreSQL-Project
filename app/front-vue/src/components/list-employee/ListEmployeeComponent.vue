<template>
  <v-app>
    <v-container>
      <div>
        <h3 class="text-center">List All Employees</h3>
        <v-data-table
          :headers="headers"
          :items="employees"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-for="(employee, key1, key2) in employees" v-slot:item.actions="{ item }">
            <v-btn color="success" :key="key1">
              <router-link
                :to="{ name: 'update', params: { id: employee.employee_id } }"
              >
                <font-awesome-icon :icon="['fas', 'user-edit']" color="white" />Edit
              </router-link>
            </v-btn>
            <v-btn @click="removeEmployee(employee.employee_id)" color="error" :key="key2">
              <font-awesome-icon :icon="['fas', 'trash']" />Delete
            </v-btn>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </v-app>
</template>

<script src='./ListEmployees.js'></script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Employee</h3>
      </div>
      <div class="card-body">
        <v-form>
          <div class="form-group">
            <v-text-field
              v-model="employee.name"
              label="Employee Name"
              type="text"
              id="name"
              name="name"
            >
            </v-text-field>
            <v-text-field
              v-model="employee.job_role"
              label="Job Role"
              type="text"
              id="job_role"
              name="job_role"
            >
            </v-text-field>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="employee.birth"
                  label="Birth"
                  id="birth"
                  name="birth"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="employee.birth"
                @click="menu = false"
              ></v-date-picker>
            </v-menu>
            <!-- <v-text-field
              v-model="employee.birth"
              label="Birth"
              type="text"
              id="birth"
              name="birth"
            >
            </v-text-field> -->
            <v-text-field
              v-model="employee.employee_registration"
              label="Employee Registration"
              type="number"
              id="employee_registration"
              name="employee_registration"
            >
            </v-text-field>
            <v-text-field
              v-model="employee.email"
              label="Email"
              type="email"
              id="email"
              name="email"
            >
            </v-text-field>
            <v-text-field
              v-model="employee.password"
              label="Password"
              type="password"
              id="password"
              name="password"
            >
            </v-text-field>
          </div>
          <v-app>
            <div class="form-group">
              <v-btn color="primary" @click="updateFormEmployee()">
                <font-awesome-icon
                  :icon="['fas', 'user-edit']"
                  class="mr-2"
                />Update
              </v-btn>
            </div>
          </v-app>
        </v-form>
      </div>
    </div>
  </div>
</template>
</template>

<script src='./EditEmployee.js'></script>
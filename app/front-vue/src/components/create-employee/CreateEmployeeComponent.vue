<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body mt-5">
        <form @submit.prevent="handleSubmitForm()">
          <div class="form-group">
            <v-text-field
              v-model="employee.name"
              label="Employee Name"
              type="text"
              id="name"
              name="name"
              :class="{ 'is-invalid': isSubmitted && $v.employee.name.$error }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.name.required"
              class="red--text"
            >
              Employee name fiel is required!
            </div>
            <v-text-field
              v-model="employee.job_role"
              label="Job Role"
              type="text"
              id="job_role"
              name="job_role"
              :class="{
                'is-invalid': isSubmitted && $v.employee.job_role.$error,
              }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.job_role.required"
              class="red--text"
            >
              Employee job role fiel is required!
            </div>
            <v-text-field
              v-model="employee.birth"
              label="Birth"
              type="date"
              id="birth"
              name="birth"
              :class="{ 'is-invalid': isSubmitted && $v.employee.birth.$error }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.birth.required"
              class="red--text"
            >
              Employee birth fiel is required!
            </div>
            <v-text-field
              v-model="employee.employee_registration"
              label="Employee Registration"
              type="number"
              id="employee_registration"
              name="employee_registration"
              :class="{
                'is-invalid':
                  isSubmitted && $v.employee.employee_registration.$error,
              }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.employee_registration.required"
              class="red--text"
            >
              Employee employee registration fiel is required!
            </div>
            <v-text-field
              v-model="employee.email"
              label="Email"
              type="email"
              id="email"
              name="email"
              :class="{ 'is-invalid': isSubmitted && $v.employee.email.$error }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.email.required"
              class="red--text"
            >
              Employee email fiel is required!
            </div>
            <v-text-field
              v-model="employee.password"
              label="Password"
              type="password"
              id="password"
              name="password"
              :class="{
                'is-invalid': isSubmitted && $v.employee.password.$error,
              }"
            >
            </v-text-field>
            <div
              v-if="isSubmitted && !$v.employee.password.required"
              class="red--text"
            >
              Employee password fiel is required!
            </div>
          </div>
          <v-app>
            <div class="form-group">
              <v-btn @click="submitNewEmployee" color="primary">
                <font-awesome-icon :icon="['fas', 'user-plus']" />Employee
              </v-btn>
            </div>
          </v-app>
        </form>
      </div>
    </div>
  </div>
</template>

<script src='./CreateEmployee.js'></script>
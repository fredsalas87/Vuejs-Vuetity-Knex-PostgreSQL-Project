<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Login Employee</h3>
      </div>
      <div>
          <div>
            <v-text-field v-model="employee.email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="employee.password" label="Password" type="password" required></v-text-field>
          </div>
          <v-app>
            <div>
              <v-btn color="primary">Enter</v-btn>
            </div>
          </v-app>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
        employee: {
            name: '',
            job_role: '',
            birth:'',
            employee_registration: '',
            email: '',
            password: '',
        }
    };
  },
  methods: {

  }
};
</script>
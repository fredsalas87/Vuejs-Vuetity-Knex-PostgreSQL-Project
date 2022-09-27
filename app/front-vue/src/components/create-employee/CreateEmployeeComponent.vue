<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body mt-5">
        <form @submit.prevent="handleSubmitForm()">
          <!-- INICIO BLOCO: Employee Name -->
          <div class="form-group">
            <v-text-field v-model="employee.name" label="Employee Name" type="text" required></v-text-field>
            <v-text-field v-model="employee.job_role" label="Job Role" type="text" required></v-text-field>
            <v-text-field v-model="employee.birth" label="Birth" type="date" required></v-text-field>
            <v-text-field v-model="employee.employee_registration" label="Employee Registration" type="number" required></v-text-field>
            <v-text-field v-model="employee.email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="employee.password" label="Password" type="password" required></v-text-field>
          </div>
          <!-- FIM BLOCO: Employee Name -->
          <v-app>
            <div class="form-group">
              <v-btn color="primary" type="submit">+ Employee</v-btn>
            </div>
          </v-app>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: "CreateEmployeeComponent",
  },
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
    handleSubmitForm() {

    }
  }
};
</script>
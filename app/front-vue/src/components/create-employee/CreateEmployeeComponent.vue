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

<script>
import { required } from "vuelidate/lib/validators";
import EmployeeServices from "../../services/EmployeeServices";
import SweetAlert2 from "sweetalert2";
export default {
  name: "CreateEmployeeComponent",
  data() {
    return {
      employee: {
        name: null,
        job_role: null,
        birth: null,
        employee_registration: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    employee: {
      name: { required },
      job_role: { required },
      birth: { required },
      employee_registration: { required },
      email: { required },
      password: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewEmployee() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          const swal = new SweetAlert2({
            toast: false,
            icon: "error",
            iconColor: "#4CAF50",
            title: "You need to include all the required fields",
            showConfirmButton: true,
            confirmButtonColor: "#4CAF50",
          });
          this.$swal(
            "Oops!",
            "You need to include all the required fields",
            "error"
          );
          return;
        }

        await EmployeeServices.createNewEmployee(this.employee);
        const swal = new SweetAlert2({
          toast: false,
          icon: "success",
          iconColor: "#4CAF50",
          title: "Employee added successfully!",
          showConfirmButton: true,
          confirmButtonColor: "#4CAF50",
        }).then((data) => {
          this.$router.push({
            name: "list",
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
/**
 * arquivo: src/components/CreateEmployee.js
 * descrição: arquivo responsável pela lógica do componente 'CreateEmployeeComponent.vue'
 */

 import { required } from "vuelidate/lib/validators";
 import EmployeeServices from "@/services/EmployeeServices";
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
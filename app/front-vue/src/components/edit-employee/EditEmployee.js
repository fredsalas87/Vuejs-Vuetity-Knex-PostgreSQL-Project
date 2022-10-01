/**
 * arquivo: src/components/edit-employee/EditEmployee.js
 * descrição: arquivo responsável pela lógica do componente 'UpdateEmployeeComponent.vue'
 */

 export default {
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
  };
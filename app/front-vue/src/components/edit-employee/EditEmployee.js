/**
 * arquivo: src/components/edit-employee/EditEmployee.js
 * descrição: arquivo responsável pela lógica do componente 'UpdateEmployeeComponent.vue'
 */

import EmployeeServices from "../../services/EmployeeServices";
import SweetAlert2 from "sweetalert2";

export default {
  name: 'EditEmployeeComponent',
  data() {
    return {
      menu: false,
      employee: {},
    };
  },
  mounted() {
    this.getEmployeeById();
  },

  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params
      const response = await EmployeeServices.getEmployeeId(id)
      this.employee = { ...response[0] }
      this.employee.birth = new Date(response[0].birth).toISOString().substr(0, 10)
    },

    async updateFormEmployee() {
      await EmployeeServices.updateEmployee(this.employee)
      const swal = new SweetAlert2({
        toast: false,
        icon: "success",
        iconColor: "#4CAF50",
        title: "Employee updated successfully!",
        showConfirmButton: true,
        confirmButtonColor: "#4CAF50",
      }).then((data) => {
        this.$router.push({
          name: "list",
        });
      });
    }
  }
};
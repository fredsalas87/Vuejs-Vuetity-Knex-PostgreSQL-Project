/**
 * arquivo: src/components/CreateEmployee.js
 * descrição: arquivo responsável pela lógica do componente 'ListEmployeeComponent.vue'
 */

import EmployeeServices from "../../services/EmployeeServices";
import SweetAlert2 from "sweetalert2";
import moment from "moment";

export default {
    name: "ListEmployeeComponent",
    data() {
        return {
            employees: [],
            headers: [
                { text: "Employee Name", value: "name" },
                { text: "Jor Role", value: "job_role" },
                { text: "Birth", value: "birth" },
                { text: "Employee Registration", value: "employee_registration" },
                { text: "Email", value: "email" },
                { text: "Actions", value: "actions" },
            ],
        };
    },
    mounted() {
        this.listAllEmployees();
    },

    filters: {
        birthDate(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },
    },

    methods: {
        async listAllEmployees() {
            const response = await EmployeeServices.getEmployees();
            this.employees = response;
        },

        async removeEmployee(id) {
            const swal = new SweetAlert2({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.value) {
                    await EmployeeServices.deleteEmployeeId(id);
                    SweetAlert2.fire(
                        'Deleted!',
                        'Successfully deleted!',
                        'success')
                    this.listAllEmployees()
                } else {
                    SweetAlert2.fire(
                        'Cancelled!',
                        'Deletion cancelled',
                        'info')
                }
            })
        },
    },
};
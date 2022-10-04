/**
 * arquivo: src/components/login-employee/LoginEmployee.js
 * descrição: arquivo responsável pela lógica do componente 'LoginEmployeeComponent.vue'
 */

import LoginEmployee from '../../services/LoginServices';
import SweetAlert2 from "sweetalert2";

export default {
    name: "Login",

    data: () => ({
        // ver: false,
        params: {
            email: "",
            password: "",
        }
    }),

    methods: {
        async login() {
            try {
                await LoginEmployee.loginEmployee(this.params)
                    .then((data) => {
                        if (data !== 'Validated') {
                            const swal = new SweetAlert2({
                                icon: "error",
                                title: "Email or password is incorrect!",
                                showConfirmButton: false,
                                timer: 1000,
                            })
                        } else {
                            const swal = new SweetAlert2({
                                icon: "success",
                                title: "Login successfully!",
                                showConfirmButton: false,
                                timer: 2000,
                            })
                            this.$router.push({
                                name: "list",
                            });
                        }
                    });
            } catch (error) {
                console.error(error);
            }
        },
        createNewEmployee() {
            this.$router.push({ name: "create" });
        }
    },
};
/**
 * arquivo: src/services/EmployeeServices.js
 * descrição: arquivo responsável pelos métodos de requisições das API's via HTTP
 */

import Api from './Api'

export default {
    /**
     * Método responsável por criar um novo(a) 'Employee'
     * (POST): localhost:3000/api/employees
     */
    async createNewEmployee(employee) {
        try {
            const response = await Api().post('/employees', employee);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * Método responsável por listar todos os 'Employees'
     * (GET): localhost:3000/api/employees
     */
    async getEmployees() {
        try {
            const response = await Api().get('/employees');
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * Método responsável por listar por ID um determinado 'Employee'
     * (GET): localhost:3000/api/employees/:id
     */
    async getEmployeeId(id) {
        try {
            const response = await Api().get(`/employees/${id}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * Método responsável por atualizar por ID um determinado 'Employee'
     * (PUT): localhost:3000/api/employees/:id
     */
    async updateEmployeeId(id) {
        try {
            const response = await Api().put(`/employees/${id}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * Método responsável por excluir por ID um determinado 'Employee'
     * (DELETE): localhost:3000/api/employees/:id
     */
    async deleteEmployeeId(id) {
        try {
            const response = await Api().delete(`/employees/${id}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
}
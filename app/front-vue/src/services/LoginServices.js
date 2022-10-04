/**
 * arquivo: src/services/EmployeeServices.js
 * descrição: arquivo responsável pelos métodos de requisições das API's via HTTP
 */

 import Api from './Api'

 export default {
    /**
     * Método responsável por fazer login de um 'Employee'
     * (POST): localhost:3000/api/employees/login
     */
     async loginEmployee(params) {
        try {
            const response = await Api().post('/employees/login', params);
            console.log(response);
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
 }
/**
 * arquivo: routes/employee.routers.js
 * descrição: arquivo responsável pelas rotas da API
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por validar o login de um 'Colaborador(a)': (POST): localhost:3000/api/employees/login
router.post('/employees/login', employeeController.loginEmployee);

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// ==> Rota responsável por listar todos 'Colaboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determinado 'Colaborador' por ID: (GET): localhost:3000/api/employees/id
router.get('/employees/:id', employeeController.findEmployeeById);

// ==> Rota responsável por atualizar um determinado 'Colaborador(a)' por ID: (PUT): localhost:3000/api/employees/id
router.put('/employees/:id', employeeController.updateEmployeeById);

// ==> Rota responsável por excluir um determinado 'Colaborador(a)' por ID: (DELETE): localhost:3000/api/employees/id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router

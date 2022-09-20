/**
 * arquivo: controllers/employee.controllers.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Employee'
exports.createEmployee = async(req, res) => {
  const { name, job_role, birth, employee_registration, email, password } = req.body;
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, birth, employee_registration, email, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, job_role, birth, employee_registration, email, password]
  );

  res.status(200).send({
    message: 'Employee added successfully!',
    body: {
      employee: { name, job_role, birth, employee_registration, email, password }
    },
  });
};

// ==> Método responsável por criar listar todos os 'Employees'
exports.listAllEmployees = async(req, res) => {
  const response = await db.query('SELECT * FROM employee ORDER BY name ASC');
  res.status(200).send(response.rows);
}
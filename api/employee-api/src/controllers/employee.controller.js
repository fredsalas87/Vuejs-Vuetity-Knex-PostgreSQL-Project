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

// ==> Método responsável por listar todos os 'Employees'
exports.listAllEmployees = async(req, res) => {
  const response = await db.query('SELECT * FROM employee ORDER BY name ASC');
  res.status(200).send(response.rows);
}

// ==> Método responsável por listar um determinado 'Employee' por ID
exports.findEmployeeById = async(req, res) => {
  const employeeId = req.params.id;
  const response = await db.query('SELECT * FROM employee WHERE employee_id = $1', [employeeId]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um determinado 'Employee' por ID
exports.updateEmployeeById = async(req, res) => {
  const employeeId = req.params.id;
  const { name, job_role, birth, employee_registration, email, password } = req.body;

  const response = await db.query(
      `UPDATE employee 
        SET name = $1, 
            job_role = $2, 
            birth = $3, 
            employee_registration = $4, 
            email = $5, 
            password = $6 
        WHERE employee_id = $7`,
      [name, job_role, birth, employee_registration, email, password, employeeId]
    );
  res.status(200).send({ message: 'Employee Updated Successfully!'});
}

// ==> Método responsável por excluir um determinado 'Employee' por ID
exports.deleteEmployeeById = async(req, res) => {
  const employeeId = req.params.id;
  await db.query('DELETE FROM employee WHERE employee_id = $1',[employeeId]);
  res.status(200).send({ message: 'Employee Deleted Successfully!'});
}
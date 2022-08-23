const express = require('express');

const studentRouter = express.Router();

const {
  create, getAll, editStudent, removeStudent,
} = require('../controllers/studentController');
const { validateStudent, validateUpdateStudent } = require('../middleware/validations');

studentRouter
  .post('/student', validateStudent, create)
  .get('/students', getAll)
  .patch('/student/:id', validateUpdateStudent, editStudent)
  .delete('/student/:id', removeStudent);

module.exports = studentRouter;

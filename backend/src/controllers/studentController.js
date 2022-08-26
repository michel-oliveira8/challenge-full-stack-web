const studentServices = require('../services/studentServices');

const create = async (req, res) => {
  const information = req.body;
  const student = await studentServices.create(information);
  if (student.message) return res.status(student.code).json({ message: student.message });

  return res.status(201).json({ message: 'Student successfully registered!' });
};

const getAll = async (_req, res) => {
  const allStudents = await studentServices.getAll();

  return res.status(200).json(allStudents);
};

const editStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await studentServices.editStudent(id, name, email);

  return res.status(200).json({ message: 'Data updated successfully' });
};

const removeStudent = async (req, res) => {
  const { id } = req.params;
  await studentServices.removeStudent(id);

  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  editStudent,
  removeStudent,
};

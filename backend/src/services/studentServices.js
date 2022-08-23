const { Student } = require('../models');

const create = async (student) => {
  const existRA = await Student.findOne({ where: { RA: student.RA } });
  if (existRA) return { code: 409, message: 'RA already registered' };

  return Student.create(student);
};

const getAll = async (student) => {
  const allStudents = await Student.findAll(student);

  return allStudents;
};

const editStudent = async (id, name, email) => {
  await Student.findOne({ where: { id } });
  const updateData = await Student.update(
    {
      name, email,
    },
    { where: { id } },
  );

  return updateData;
};

const removeStudent = async (id) => {
  const remove = await Student.destroy({ where: { id } });

  return remove;
};

module.exports = {
  create,
  getAll,
  editStudent,
  removeStudent,
};

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      RA: DataTypes.STRING,
    },
    {
      timestamps: true,
    },
  );

  return Student;
};

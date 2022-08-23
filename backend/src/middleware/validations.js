const validationsSchema = require('../schemas/validations');

const validateStudent = (req, res, next) => {
  const {
    name, email, cpf, RA,
  } = req.body;

  const validationName = validationsSchema.validateName(name);
  if (validationName.message) {
    return res.status(validationName.code).json({
      message: validationName.message,
    });
  }

  const vaidationEmail = validationsSchema.validateEmail(email);
  if (vaidationEmail.message) {
    return res.status(vaidationEmail.code).json({
      message: vaidationEmail.message,
    });
  }

  const validationCpf = validationsSchema.validateCpf(cpf);
  if (validationCpf.message) {
    return res.status(validationCpf.code).json({
      message: validationCpf.message,
    });
  }

  const validationRA = validationsSchema.validateRA(RA);
  if (validationRA.message) {
    return res.status(validationRA.code).json({
      message: validationRA.message,
    });
  }
  next();

  return {};
};

const validateUpdateStudent = (req, res, next) => {
  const {
    name, email,
  } = req.body;

  const validationName = validationsSchema.validateName(name);
  if (validationName.message) {
    return res.status(validationName.code).json({
      message: validationName.message,
    });
  }

  const vaidationEmail = validationsSchema.validateEmail(email);
  if (vaidationEmail.message) {
    return res.status(vaidationEmail.code).json({
      message: vaidationEmail.message,
    });
  }

  next();

  return {};
};

module.exports = {
  validateStudent,
  validateUpdateStudent,
};

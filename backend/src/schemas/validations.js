const validateName = (name) => {
  if (!name) return { code: 400, message: 'Name is required' };

  return {};
};

const validateEmail = (email) => {
  if (!email || email === '') return { code: 400, message: 'Email is required' };
  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  if (!validEmail) return { code: 400, message: 'Email must be a valid email' };

  return {};
};

const validateCpf = (cpf) => {
  if (!cpf || cpf === '') return { code: 400, message: 'CPF is required' };
  if (cpf.length < 11) return { code: 400, message: 'CPF length must be 11 characteres long' };

  return {};
};

const validateRA = (ra) => {
  if (!ra) return { code: 400, message: 'RA is required' };
  if (ra.length < 6) return { code: 400, message: 'RA length must be 6 characteres long' };

  return {};
};

module.exports = {
  validateName,
  validateEmail,
  validateCpf,
  validateRA,
};

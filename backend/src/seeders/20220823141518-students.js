module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Students',
    [
      {
        name: 'Steve Rogers',
        email: 'capitain@maisaeducacao.com',
        cpf: '12345678901',
        RA: '101230',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Thor',
        email: 'thor@maisaeducacao.com',
        cpf: '09876543210',
        RA: '101231',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Bruce Banner',
        email: 'hulk@maisaeducacao.com',
        cpf: '67890123456',
        RA: '101232',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Tony Stark',
        email: 'ironman@maisaeducacao.com',
        cpf: '54321098765',
        RA: '101233',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Students', null, {}),
};


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('refuseReasons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    schema: 'payable',
  }),
  down: (queryInterface) => queryInterface.dropTable('refuseReasons'),
};

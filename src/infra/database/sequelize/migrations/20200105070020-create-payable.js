
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('payables', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    value: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    fee: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    paymentDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    status: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          schema: 'payable',
          tableName: 'payableStatuses',
        },
        key: 'id',
      },
    },
    refuseReason: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          schema: 'payable',
          tableName: 'refuseReasons',
        },
        key: 'id',
      },
    },
    transactionId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          schema: 'transaction',
          tableName: 'transactions',
        },
        key: 'id',
      },
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
  down: (queryInterface) => queryInterface.dropTable('payables'),
};

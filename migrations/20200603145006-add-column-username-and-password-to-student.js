'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'username',Sequelize.STRING)
    .then(() =>{return queryInterface.addColumn('Students', 'password',Sequelize.STRING)})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'username')
    .then(() =>{return queryInterface.removeColumn('Students', 'password')})
  }
};

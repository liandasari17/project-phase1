'use strict';
const subjects = require (`../files/subjects.json`)
subjects.forEach((subject) => {
  subject.createdAt = new Date(),
  subject.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects',subjects,{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};

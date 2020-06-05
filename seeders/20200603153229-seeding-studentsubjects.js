'use strict';
const studentsubjects = require (`../files/studentsubjects.json`)
studentsubjects.forEach((studentsubject) => {
  studentsubject.createdAt = new Date(),
  studentsubject.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentSubjects',studentsubjects,{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StudentSubjects', null, {});
  }
};

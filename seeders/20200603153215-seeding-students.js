'use strict';
const students = require (`../files/students.json`)
students.forEach((student) => {
  student.createdAt = new Date(),
  student.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',students,{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};

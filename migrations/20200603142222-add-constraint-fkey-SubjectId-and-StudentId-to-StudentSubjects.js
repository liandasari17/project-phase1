'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('StudentSubjects', ['StudentId'], {
    type: 'foreign key',
    name: 'custom_fkey_StudentId',
    references: { //Required field
      table: 'Students',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })
  .then (() => {
    return queryInterface.addConstraint('StudentSubjects', ['SubjectId'], {
      type: 'foreign key',
      name: 'custom_fkey_SubjectId',
      references: { //Required field
        table: 'Subjects',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(`StudentSubjects`,`custom_fkey_StudentId'`)
    .then (() => { return queryInterface.removeConstraint(`StudentSubjects`,`custom_fkey_SubjectId`)})
  }
};

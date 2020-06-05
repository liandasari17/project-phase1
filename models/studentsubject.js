'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class StudentSubject extends Model {}
  StudentSubject.init({
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  StudentSubject.associate = function(models) {
    StudentSubject.belongsTo(models.Student)
    StudentSubject.belongsTo(models.Subject)
  };
  return StudentSubject;
};
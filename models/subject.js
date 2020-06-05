'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Subject extends Model {}
  Subject.init({
    name: DataTypes.STRING,
    credits: DataTypes.INTEGER,
    lecturer: DataTypes.STRING
  },{
    sequelize
  })
  
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student,{through : `StudentSubjects`})
  };
  return Subject;
};
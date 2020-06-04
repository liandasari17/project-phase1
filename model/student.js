'use strict';
module.exports = (sequelize, DataTypes) => {
    const {
        Model
    } = sequelize.Sequelize
    class Student extends Model {}
    Student.init({
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Should input first name"
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Should input first name"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "Email is not valid"
                }
            }
        },
        ipk: {
            type: DataTypes.FLOAT,
            validate: {
                notEmpty: {
                    msg: "Email harus diisi"
                },
                min: {
                    args: 0,
                    msg: "IPK is not valid"
                },
                max: {
                    args: 4,
                    msg: "IPK is not Valid"
                }
            }
        }
    }, {
        sequelize
    })
    Student.associate = function (models) {
        Student.belongsToMany(models.Subject, {
            through: `StudentSubjects`
        })
    };
    return Student;
};
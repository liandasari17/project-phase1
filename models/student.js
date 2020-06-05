'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Student extends Model {

    fullName () {
        return this.firstName + ` ` + this.lastName
    }

  }
  Student.init({ firstName: {
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
            msg: "Should input last name"
        }
    }
},
email: {
    type: DataTypes.STRING,
    validate: {
        notEmpty: {
            msg: "Should input email"
        },
        isEmail: {
            msg: "Email is not valid"
        }
    }
},
ipk: {
    type: DataTypes.FLOAT,
    validate: {
        notEmpty: {
            msg: "GPA must be filled"
        },
        // min: {
        //     args: 0,
        //     msg: "IPK is not valid"
        // },
        // max: {
        //     args: 4,
        //     msg: "IPK is not Valid"
        // }
    }
},
username : {
    type: DataTypes.STRING,
    validate: {
        notEmpty: {
            msg: "Should input username"
        }
    }
},
password : {
    type: DataTypes.STRING,
    validate: {
        notEmpty: {
            msg: "Should input password"
        }
    }
}
},{sequelize})

Student.beforeCreate((instance,options) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(instance.password, salt);
    instance.password = hash
})


  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,{through : `StudentSubjects`})
  };
  return Student;
};
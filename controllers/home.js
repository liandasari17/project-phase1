const {Student} = require (`../models`)
const bcrypt = require('bcrypt')
const Helper = require(`../helper/helper`)


class Controller {

    static home (req,res) {
        res.render(`home`)
    }

    static registerForm (req,res) {
        let errors = req.query.err
        
        res.render(`formRegister`,{error : errors || ``})
    }

    static register (req,res) {
        let user = {
            firstName :req.body.firstName,
            lastName :req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            createdAt : new Date (),
            updatedAt : new Date (),
            ipk : Number(req.body.gpa)
        }
        // res.send(user)
        Student.create(user)
        .then(data => {
            Helper.sendEmail(`Registration Assesment`,
            `New student named ${req.body.firstName} ${req.body.lastName} has registered,\n 
            please verify his/her GPA based on previous term database, Thank you`)
            res.redirect(`/`)
        })
        .catch (err => {
            let errors = []
            if (err.name === `SequelizeValidationError`){
                for (let i = 0 ; i < err.errors.length ; i++){
                    errors.push(err.errors[i].message)
                }
                res.redirect(`/register/?err=${errors.join(`, `)}`)
            }
        })
    }


    static login (req,res) {
        Student.findOne({where:{username:req.body.username}})
        .then ((data) => {
            // res.send(data)
            if (!data) res.send(`Username not found`)
            else {
                // res.send(data)
                if (bcrypt.compareSync(req.body.password,data.password)){
                    req.session.userId = req.body.username
                    res.redirect(`/students`)
                }
                else res.send(`Password Salah`)
            }
        })
    }
    
    static logout (req,res) {
        req.session.destroy(function(err) {
            if (err) {
                res.send(err)
            }
            else res.redirect(`/`)
        })
    }

}

module.exports = Controller
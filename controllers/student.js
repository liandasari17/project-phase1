const {Student,Subject,StudentSubject} = require(`../models`)
const Helper = require(`../helper/helper`)
class Controller {

    static list(req,res){
       Student.findAll({
           include : [{
               model : Subject
           }]
       })
       .then (data => {
        //    res.send(data)
        Student.findOne({where:{username:req.session.userId}})
        .then(profil => {
            res.render(`studentsListBoots`,{
                data,
                // getFullName : Helper.getFullName,
                totalCredit : Helper.totalCredit,
                profil
             })
        })
           
    })
       .catch (err => {res.send(err)})
    }

    static listStudentSubjects (req,res){
        StudentSubject.findAll({
            where :{
                StudentId : req.params.id
            },
            include : [{
                model : Subject
            },
            {
                model : Student
            }
        ]
        })
        .then (data => {
            // res.send(data)
            Student.findAll({where : { id : req.params.id}})
            .then (dataStudent => {
                Student.findOne({where:{username:req.session.userId}})
                .then(profil => {
                    let msg = req.query.msg
                    res.render(`studentSubjectsBoots`,{
                    profil,
                    dataStudent,
                    data,
                    // getFullName : Helper.getFullName,
                    msg : msg || ``
                })
                })
                
            })
            .catch (err => {res.send(err)})
        })
        .catch (err => res.send(err)) 
    }

    static delete (req,res) {
        StudentSubject.destroy({where : {id : req.params.id}})
        .then (data => res.redirect(`/students/${req.params.student}/subjects`))
    }

    static studentAddSubject (req,res) {
        Student.findOne({where : {id : req.params.id}})
        .then (dataStudent => {
            Subject.findAll()
            .then (dataSubject => {
                // res.send(dataStudent)
                res.render(`formAdd`,{dataStudent,dataSubject
                    // , getFullName : Helper.getFullName
                })
            })
            .catch (err => res.send(err))
        })
        .catch(err => res.send(err))
    }


    static studentAddSubjectSubmit (req,res) {
       let obj = {
           StudentId : req.params.id,
           SubjectId : req.body.subjects,
           createdAt : new Date (),
           updatedAt : new Date () 
       }
    //    res.send(obj)
       StudentSubject.create(obj)
       .then(data => res.redirect(`/students/${req.params.id}/subjects`))
       .catch(err => res.send(err))

    }

    static updateProfile (req,res) {
        let update = {
            email : req.body.email,
            username : req.body.username,
            updatedAt : new Date ()
        }
        let msg = `Student has been updated`
        Student.update(update,{where : {id : req.params.id}})
        .then (data => res.redirect(`/students/${req.params.id}/subjects/?msg=${msg}`))
        .catch(err => {
            let errors = []
            if (err.name === `SequelizeValidationError`){
                for (let i = 0 ; i < err.errors.length ; i++){
                    errors.push(err.errors[i].message)
                }
                res.redirect(`/students/${req.params.id}/subjects/?msg=${errors.join(`, `)}`)
            }
        })
    }


}

module.exports = Controller
const {
    Subject,
    Student
} = require("../models/index")

class SubjectController {

    static list(request, response) {
        Subject.findAll()
            .then(data => {
                // response.send(data)
                Student.findOne({where:{username:request.session.userId}})
                .then (profil => {  response.render("subjectBoots.ejs", {
                    data,profil
                })})
                .catch (err => response.send(err))
              
            })
            .catch(err => {
                response.send(err)
            })
    }

    static listById(request, response) {
        Subject.findAll({
                include: {
                    model: Student
                },
                where: {
                    id: request.params.id
                }
            })
            .then(data => {
                response.render("subjectShowStudentBoots.ejs", {
                    data
                })
                // response.send(data)
            })
            .catch(err => {
                response.send(err)
            })
    }
}

module.exports = SubjectController
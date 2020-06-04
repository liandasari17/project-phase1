const {
    Subject,
    Student
} = require("../models/index")

class SubjectController {

    static list(request, response) {
        Subject.findAll()
            .then(data => {
                // response.send(data)
                response.render("subject.ejs", {
                    data
                })
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
                response.render("subjectShowStudent.ejs", {
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
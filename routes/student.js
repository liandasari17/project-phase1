const router = require (`express`).Router()
const Controller = require (`../controllers/student`)

router.get(`/students`,Controller.list)
router.get(`/students/:id/subjects`,Controller.listStudentSubjects)
router.get(`/students/:student/subject/delete/:id`, Controller.delete)
router.get(`/students/:id/subject/add`,Controller.studentAddSubject)
router.post(`/students/:id/subject/add`,Controller.studentAddSubjectSubmit)
router.post(`/students/edit/:id`,Controller.updateProfile)


// router.get(`/students/add`,Controller.add)
// router.post(`/students/add/submit`,Controller.addSubmit)
// router.get(`/students/edit/:id`,Controller.edit)
// router.post(`/students/edit/:id`,Controller.editSubmit)
// router.get(`/students/delete/:id`,Controller.delete)


module.exports = router
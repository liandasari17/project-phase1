const router = require (`express`).Router()
const Controller = require (`../controllers/subject`)

router.get(`/subjects`, Controller.list)
router.get(`/students/:id`, Controller.listById)
// router.get(`/subjects`,Controller.list)
// router.get(`/subjects/add`,Controller.add)
// router.post(`/subjects/add/submit`,Controller.addSubmit)
// router.get(`/subjects/edit/:id`,Controller.edit)
// router.post(`/subjects/edit/:id`,Controller.editSubmit)
// router.get(`/subjects/delete/:id`,Controller.delete)



module.exports = router
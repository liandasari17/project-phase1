const router = require (`express`).Router()
const bcrypt = require('bcrypt');
const HomeController = require (`../controllers/home`)
const studentsRoutes = require (`./student`)
const subjectsRoutes = require (`./subject`)

function checkSession(req,res,next) {
    if(req.session.userId) {
        next()
    }
    else res.redirect(`/home`)
}

router.get(`/`,HomeController.home)
router.get(`/register`,HomeController.registerForm)
router.post(`/register`,HomeController.register)
router.post(`/login`,HomeController.login)
router.get(`/logout`,HomeController.logout)


router.use(checkSession)
router.use(subjectsRoutes)
router.use(studentsRoutes)


module.exports = router
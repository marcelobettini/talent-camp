const router = require("express").Router();

const auth = require("./authCtrl")
//REGISTER
router.post("/register", auth.register)
//LOGIN
router.post("/login", auth.login)


module.exports = router
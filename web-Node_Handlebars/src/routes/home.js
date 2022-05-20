const router = require("express").Router()

const { homeCtrl } = require("../ctrl/homeCtrl")

//esta ruta (con GET) nos entrega Home
router.get("/", homeCtrl)

module.exports = router
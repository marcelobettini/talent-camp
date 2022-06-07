const practicandoCtrl = require("../ctrl/practicandoCtrl")

const router = require("express").Router()

router.get("/", practicandoCtrl)

module.exports = router
const router = require("express").Router()
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


//esta ruta (con GET)  nos entrega el form
router.get("/", (req, res) => {
    res.render("form")
})

//esta ruta (con POST)  recibe los datos enviados desde el form
router.post("/", (req, res) => {
    const email = {
        to: "clientes@nuestraempresa.pio",
        from: req.body.email,
        subject: `Mensaje para ${req.body.area}`,
        html: `${req.body.name} escribió: ${req.body.message}`
    }

    transport.sendMail(email)
})


module.exports = router

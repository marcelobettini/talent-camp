const formCtrlGet = (req, res) => {
    res.render("form")
}

const formCtrlPost = (req, res) => {
    const email = {
        to: "clientes@nuestraempresa.pio",
        from: req.body.email,
        subject: `Mensaje para ${req.body.area}`,
        html: `${req.body.name} escribió: ${req.body.message}`
    }
    transport.sendMail(email)
}

module.exports = { formCtrlGet, formCtrlPost }
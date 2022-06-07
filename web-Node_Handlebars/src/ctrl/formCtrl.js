const transport = require("../../nodemailer/transport")
const formCtrlGet = (req, res) => {
    let local = req.app.get("global")
    console.log(local)
    const newObj = {
        name: "Sandro",
        email: "notiene",
        alive: false,
        age: 1900,
        knickname: "Moon Ra"
    }

    req.app.set("global", newObj)
    local = req.app.get("global")
    console.log("segundo mensaje", local)


    res.render("form")
}
const formCtrlPost = async (req, res) => {
    const email = {
        to: "clientes@nuestraempresa.pio",
        from: req.body.email,
        subject: `Mensaje para ${req.body.area}`,
        html: `${req.body.name} escribió: ${req.body.message}`
    }
    const deliveryStatus = await transport.sendMail(email)
    let sendStatus = ""
    if (!deliveryStatus.rejected.length) {
        sendStatus = "Hemos recibido su mensaje"

    } else {
        sendStatus = "No pudimos enviar. Intente el año entrante"

    }

    // res.render("form", { sendStatus })
    res.redirect("Hola Home", "/")  //esto llevaría a Home, en caso de que decidiera manejar el after send de otra forma
    //res.render("home") //esto haría lo mismo, pero renderizando la vista en vez de dirigir a la ruta, es decir, la ruta seguiría mostrando /contact, aunque se renderice el componente home

}
module.exports = { formCtrlGet, formCtrlPost }
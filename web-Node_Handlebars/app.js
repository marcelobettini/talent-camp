const express = require("express") //common js
const path = require("path")
const homeRouter = require("./src/routes/home.js")
const PORT = process.env.PORT || 3000 //env = environment (variables de ambiente o de entorno)
const hbs = require("express-handlebars")
require("dotenv").config();
const app = express()

//HBS Config
app.engine(".hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs")
app.set("views", "./src/views")

//middleware para declarar la carpeta estática o pública
app.use(express.static(path.join(__dirname, "/public")))
// app.use(express.static("public")) esta línea y la de arriba hacen lo mismo, apuntar el sitio de la carpeta de recursos estáticos (public)

//habilita lectura de formularios a través del objeto body de la request
app.use(express.urlencoded({ extended: true }))

//Enrutamiento de las request (peticiones). Aquí indicamos qué archivo procesará las peticiones a las rutas de nuestra app
app.use("/", homeRouter) //podemos indicar el enrutador de este modo, con la declaración de la línea 2
app.use("/contact", require("./src/routes/contact.js"))// o hacerlo directamente aquí



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`http://localhost:${PORT}`)
})

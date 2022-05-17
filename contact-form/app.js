const express = require("express") //common js
const PORT = process.env.PORT || 3000 //env = environment (variables de ambiente o de entorno)
const hbs = require("express-handlebars")
require("dotenv").config();
const app = express()

//HBS Config
app.engine(".hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs")
app.set("views", "./src/views")

//middleware para declarar la carpeta estática o pública
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use("/contact", require("./src/routes/index.js"))// aquí declaramos que el archivo src/routes/index.js procesará las peticiones a la ruta raíz de nuestra app



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`http://localhost:${PORT}`)
})

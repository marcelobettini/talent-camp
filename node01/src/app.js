const express = require("express");
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static("public"))

//esto se ignora mientras haya un archivo index.html en la carpeta static ("public")
app.get("/", (req, res) => {
    res.send("Ruta raíz - Home Page")
})

app.get("/users", (req, res) => {
    res.send("no me importan tus query string")
})
//las rutas  pueden recibir Query params (query strings) sin hacerles ningún tipo de preparación adicional. El formato para realizar una consulta de este modo es: ruta?clave=valor por ejemplo http://mitienda.com/productos?plancha=atma. Las query strings viajarán al backend en el objeto query de la petición o request. Para pasar más de un query param, deben concatenar con &, sin repetir el ?
app.get("/products", (req, res) => {
    if (!Object.keys(req.query).length) {
        res.send("<h2>Estás en la página de productos sin query</h2>")
    } else {
        const values = Object.values(req.query)
        console.log(values)
        res.send("mostrar la query")
    }
})

//las rutas pueden recibir URL params. Para enviar más de un param, separo con /: (ojo, en el front, se introduce solamente la / seguida del contenido del param)
app.get("/products/:id/:name", (req, res) => {
    const { id, name } = req.params
    res.send(`<p>He recibido el parámetro URL con el id ${id} y el name ${name}`)
})




//catch all route (404)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notFound.html")); //send normal HTML file
});



app.listen(PORT, (err) => {
    err ? console.log(`Error in server setup: ${err.code}`)
        : console.log(`Server up at http://localhost:${PORT}`)

})

const express = require("express")
const server = express()

server.get("/", (req, res) => {
    const mensaje = "ya estamos Cacho"
    res.send(mensaje)
})
server.get("/saludo", (req, res) => {
    res.send("Hola Tarola")
})

server.listen(3000, (err) => {
    err ? console.log("Hubo un error") : console.log("Servidor corre en http://localhost:3000")
})
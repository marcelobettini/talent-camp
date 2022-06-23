const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const mongoConnection = process.env.db_url
mongoose.connect(mongoConnection)
const db = mongoose.connection
db.on('error', (err) => console.log(`Error: ${err}`));
// db.on('connected', () => console.log("Mongo Atlas Connected")) //esto corre cada vez que se conecta
db.once('connected', () => console.log("Mongo Atlas Connected")) //esto corre la primera vez que se conecta



const port = process.env.PORT || 3000
const app = express();
app.use(express.static('./static'))


app.listen(port, (err) => console.log((err ? `Error: ${err}` : `server on http://localhost:${port}`)));


//Routing
//Route for Posts resources
app.use("/posts", require("./posts/postsRouter"));




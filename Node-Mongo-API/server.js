require("dotenv").config()
require("./db_config/db")
const express = require("express");

const port = process.env.PORT || 3000
const app = express();
app.use(express.static('./static'))
app.use(express.json())//esto permite que el backend "lea" requests con objetos de tipo JSON
app.use(express.urlencoded({ extended: true }))
//from body-parser docs (body parser fue absorbido por Express y ahora directamente usamos express.urlencoded):
// extended
// The extended option allows to choose between parsing the URL - encoded data with the querystring library(when false) or the qs library(when true).The "extended" syntax allows for rich objects and arrays to be encoded into the URL - encoded format, allowing for a JSON - like experience with URL - encoded.For more information, please see the qs library.

// Defaults to true, but using the default has been deprecated.Please research into the difference between qs and querystring and choose the appropriate setting.
//PEEEEEERO... si no ponen extended: sarasa, por lo general va a funcionar ok 😎

app.listen(port, (err) => console.log((err ? `Error: ${err}` : `server on http://localhost:${port}`)));


//Routing
//Route for Posts resources
app.use("/posts", require("./posts/postsRouter"));

//Route for Users resources
app.use("/users", require("./users/usersRouter"));

//Auth
app.use("/auth", require("./auth/authRouter"));

//Catch all route (404)
app.use((req, res, next) => {
    let error = new Error("Resource not found");
    error.status = 404;
    next(error)
});

//Error handler
app.use((error, req, res, next) => {
    if (!error.status) {
        error.status = 500;
        error.message = "Internal Error Server"
    }
    res.status(error.status).json({ status: error.status, message: error.message })

})





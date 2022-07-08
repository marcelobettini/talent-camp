import express from "express";
import jwt from "jsonwebtoken";
import morgan from "morgan";
const port = 3000;
const server = express();
server.use(morgan("tiny"));
//esto debería estar a buen resguardo, no como ocurre aquí:
const TOKEN_PRIVATE_KEY = "clave_super_s3cr3t4_@#"

server.get("/api", (req, res) => res.json({ message: "Learning JSON WEB TOKEN" }))
server.post("/api/login", (req, res) => {

    //Aquí simulamos un inicio de sesión, en vez de ir a una base de datos con nombre, mail o el dato que fuere necesario, simplemente creamos una constante user que representa un usuario existente en la DB.
    const user = {
        id: 1,
        name: "el chelo nerdo",
        email: "correo@email.com"
    }
    //Cuando el usuario se loguea (autenticación), cramos el token con el que podrá hacer ciertas operaciones que de otro modo no podría llevar a cabo (autorización). Para crear el token debemos pasrle a JWT el usuario y la clave privada super hiper mega secreta (ergo, debe estar fuera del código, en variables de entorno o en un archivo seguro)

    jwt.sign({ user }, TOKEN_PRIVATE_KEY, { expiresIn: '20s' }, (err, token) => {
        err ? res.json({ message: err.message }) : res.json({ message: "Token created!", jwt: token })
    });
});

//Creamos un middleware para verificar el token del usuario antes de garantizarle acceso al controlador del servicio para
//la ruta "/api/posts".
//Cuando el usuario desee acceder a una ruta o recurso protegidos, deberá enviar el token junto con la petición. Tipicamente ese token viaja en la key "Authorization" del encabezado o Header de la HTTP Request con el esquema conocido como "Bearer Schema" o "Esquema de Portador". El contenido del header debería verse más o menos así: Bearer kskdjeimdiusnsfasfsdf87sddfmsdmf... (es decir, la palabra Bearer seguida de un espacio y el token)

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        //partimos bearerHeader en dos items de arreglo. En la pos 1 está "Bearer" y en la posición 2 está el token
        const bearerToken = bearerHeader.split(" ").pop()
        req.token = bearerToken //??
        next()
    } else {
        res.status(403).json({ message: "Forbidden access. Token required" })
    }
}


server.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, TOKEN_PRIVATE_KEY, (err, authData) => {
        if (err) {
            res.json({ message: err.message }) //
        } else {
            res.json({ message: "Post Created!", authData })
        }
    })
})

server.listen(port, (err) => {
    err ? console.warn("Servidor no conectado", { "Error": err }) : console.log(`Servidor corre en http://localhost:${port}`);
})


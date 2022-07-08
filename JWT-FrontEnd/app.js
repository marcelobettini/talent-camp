//Este front sencillo con Vanilla JS no les va a correr porque necesitan una base de datos y la api que entrega dichos recursos, pero
//el código SÍ les va a servir porque indica la forma de consumir los datos, qué hacer con los tokens, cómo enviarlos en las peticiones, etc.


const usersContainer = document.getElementById("users");
const postsContainer = document.getElementById("posts");
const formLogin = document.getElementById("formLogin");
const formPost = document.getElementById("formPost");
const btnGetPosts = document.getElementById("btnGetPosts");
btnGetPosts.addEventListener("click", handleGetPosts);

//Apenas se monte la app, vamos a lanzar una req http al server (endopint: /users)
let data = [];
fetch("http://localhost:3030/users")
    .then(res => res.json())
    .then((json) => {
        data = json;
        renderData(data)
        console.log(data)
    })
    .catch(err => console.log(err));

function renderData(data) {
    data.forEach((elem => {
        let user = document.createElement("p");
        user.textContent = elem.email;
        usersContainer.appendChild(user)
    }))
}

function handleGetPosts() {
    fetch("http://localhost:3030/posts")
        .then(res => res.json())
        .then((data) => renderPosts(data))
        .catch(err => console.log(err));
}

function renderPosts(posts) {
    posts.forEach((post) => {
        let postTitle = document.createElement("h4")
        let postBody = document.createElement("p")
        postTitle.textContent = post.title
        postBody.textContent = post.body
        postsContainer.appendChild(postTitle)
        postsContainer.appendChild(postBody)
    }
    )
}

//El evento submit del login form lanza un fetch con el método POST al endpoint: /auth/login. En el body de la request cargamos los campos del formulario (email y password)
formLogin.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formLogin)

    const obj = {
        email: data.get("email"),
        password: data.get("password")
    }

    fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            localStorage.setItem("access_token", json.Access_Token)
        })
}

formPost.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formPost)
    const obj = {
        userid: +data.get("userid"),
        title: data.get("title"),
        body: data.get("body")
    }

    fetch("http://localhost:3030/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem("access_token")
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))


}
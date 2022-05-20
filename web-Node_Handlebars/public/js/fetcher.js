let products = []


//async/await es una opción para no utilizar las promesas con .then y .catch, permite escribir código que parece sincrónico, aunque en el fondo no lo es, tal como ocurre cuando lo manejamos con promesas. Debemos recordar que, más allá de la forma en que escribamos nuestro código, las operaciones con recursos externos (peticiones HTTP, consulta a bases de datos, etc) siempre serán de naturaleza asincrónica en entornos JavaScript.
async function getData() {
    const res = await fetch("https://5fc82e232af77700165ad172.mockapi.io/api/products")
    products = await res.json()
    renderData(products)
}
//El modo "tradicional", con promesas.
// fetch("https://5fc82e232af77700165ad172.mockapi.io/api/products")
//     .then(res => res.json())
//     .then(data => products = data)
//     .catch(err => console.log(err))


getData()
// renderData(products) //esto se ejecutará antes de la operación asincrónica del fetch, ergo, no tendré realmente el argumento products para pasarle a renderData... (EventLoop, CallStack y Message o Callback Queue -cómo funciona JS por dentro-)


function renderData(data) {
    data.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card", "col-10", "col-sm-5", "col-md-4", "col-lg-3", "my-3", "mx-1", "pt-2")
        card.innerHTML = `        
        <img src="${element.image}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.origin}</h6>
        <p class="card-text">${element.description}</p>        
  </div>
</div>`
        productsContainer.appendChild(card)
    });
}

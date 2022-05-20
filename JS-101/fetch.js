const section = document.querySelector("section")
let characters = []

fetch('https://finalspaceapi.com/api/v0/character')
    .then(res => res.json())
    .then(data => {
        characters = data
        characters.forEach(el => renderChars(el))
    })
    .catch(err => console.log(err))

function renderChars(char) {
    const div = document.createElement("div")
    const card = `
    <h3>${char.name}</h3>
    <img src="${char.img_url}" alt="${char.name}">
    <p>${char.status}</p>
    <p>${char.species}</p>
    `
    div.innerHTML = card
    div.classList.add("card")
    // const name = document.createElement("p")
    // name.innerText = char.name
    section.appendChild(div)
}



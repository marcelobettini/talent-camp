//objetos literales

const persona1 = {

    name: "Leticia",
    email: "data@mail.com",
    skills: ["singing", "swimming", "taking it like a champ"],
    age: 30

}

const persona2 = {
    name: "Pedro",
    email: "peter@mail.com",
    skills: ["coding in Assembler", "jogging", "sleeping"],
    age: 301
}

const arrObj = [persona1, persona2]
console.log(arrObj)

arrObj.forEach((el) => {
    console.log(el.skills[0])
})


persona2.name = "Lucrecia"
console.log(persona2)
console.log(persona1.skills.pop())
console.log(persona1.skills)

persona2.inmortal = true
console.log(persona2)

console.clear()
const jsonData = JSON.stringify(persona1)
console.log(persona1)
console.log(jsonData)

console.log(typeof jsonData)
const objAgain = JSON.parse(jsonData)
console.log(objAgain)

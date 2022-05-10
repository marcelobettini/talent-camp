//La sintaxis de los rest parameters permite representar un número indefinido de argumentos como un array
//En el estándar ES5 se accedía a través de "arguments" 
function varArgs(a = "foo", b = "bar", c = "baz") {
    console.log("Argumentos explícitos");
    console.log(a, b, c)
    console.log("Resto de los argumentos", arguments); //retorna un objeto
}
varArgs(-9, "una nube", "Heidi", "Calabaza", true, NaN, 500)

//A partir de ES6 podemos recibir estos argumentos no parametrizados con el parámetro rest (esto es un nombre convencional)
function varArgs2(a = "foo", b = "bar", c = "baz", ...rest) {
    console.log("Argumentos explícitos");
    console.log(a, b, c)
    console.log("Resto de los argumentos", rest); //retorna un array    
}
varArgs2(-9, "una nube", "Heidi", "Calabaza", true, NaN, 500)

//A partir de ES2018 se agregaron las propiedades rest a los objetos. Esto permite desestructurar un objeto y recoger las "sobras" dentro de un nuevo objeto

let numbers = {
    x: 1,
    y: true,
    a: 3,
    b: 4,
    c: 5
};
const { f, y, ...rest } = numbers
console.log('objeto x:', x)
console.log(typeof x) //number (solo el valor)
console.log('objeto y:', y)
console.log(typeof y) //boolean (solo el valor)

console.log('objeto z:', rest)
console.log(typeof rest) //object

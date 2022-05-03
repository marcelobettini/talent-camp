//JS no tiene control de tipos sino que es un lenguaje de tipado dinámico. Podemos definir una variable e ir cambiando el valor y con ello, podría cambiar su tipo, como se muestra abajo.

let nombre //declaración de variable, si no la inicializamos (o sea, si no definimos su valor) JS le asignará por defecto el valor undefined
console.log(nombre) // undefined
nombre = "Pirulo" //asignar un valor a una variable ya defininida
console.log(nombre) //"Pirulo"
console.log(typeof nombre) //string
nombre = 230
console.log(nombre)
console.log(typeof nombre) //number
nombre = true
console.log(nombre)
console.log(typeof nombre) //boolean
//se recomienda inicializar las variables

//arreglo, una variable que permite almacenar más de un valor. Se definen entre corchetes y separados por comas. Los valores pueden ser de distinto tipo. Un arreglo contiene un índice, que consta de un número entero, comenzando por 0 (ZBI zero based index), para cada elemento que contiene.

const nombres = ["Pedro", "Peter", true, -345, "Piotr", false, "banana"] //arreglo con valores de múltiples tipos (declaración + inicialización)
console.log(nombres)

//cómo accedemos a una posición x del arreglo? por su índice:
console.log(nombres[0])
//si quiero acceder al último, no necesito saber cuál es su índice, sino la longitud
//del arreglo (y debo restarle 1)
console.log(nombres[nombres.length - 1])
const mascotas = [] //declarar un arreglo e inicializarlo como un arreglo vacío
//arriba hemos definido un arreglo vacío.
console.log(mascotas) // [] (arreglo vacío)

//insertar un valor por asignación directa, refiriendo el índice
mascotas[0] = "Terry"
console.log(mascotas)

//insertar un valor con el método push
mascotas.push("Laika")
console.log(mascotas) //["Terry", "Laika"]

//ahora con una función muy sencilla vamos a explicar el método push
//las funciones se pueden crear con la palabra function o como funciones flecha (arrow functions o fat arrow functions)
//recapitulemos, qué hace push? crea un espacio luego del último elemento y allí inserta uno nuevo

function empujadora(arr, elemento) {
    const newLastIndex = arr.length
    arr[newLastIndex] = elemento
}

//para que una función se ejecute, debemos llamarla (invocarla, correrla, ejecutarla... etc.) Se hace con el nombre más los párentesis. Si la función tiene parámetros, debemos incluirlos entre los paréntesis, separados por comas si hubiere más de uno

empujadora("Cachavacha") //estas dos líneas funcionaban antes de asignar a la función el parámetro que recibe un array...
empujadora("Yasmin")
console.log(mascotas) //[los que ya estaban más... "Cachavacha", "Yasmin"]

//ahora es una función más útil porque el elemento es variable... siempre hay un pero, no podemos utilizar esta función para otro arreglo que no sea mascotas. Podemos mejorarla, pasando también como argumento el nombre del arreglo.

const nuevoArr = []

empujadora(nuevoArr, "Aldrin") //nuevoArr ["Aldrin"]
empujadora(mascotas, "Yolanda") //mascotas [..., "Yolanda"]
console.table(nuevoArr)
console.table(mascotas)

//Antes hablamos de arrow functions... sería así:
const empujadoraArrow = (arr, elemento) => {
    const newLastIndex = arr.length
    arr[newLastIndex] = elemento
}

empujadoraArrow(nuevoArr, "Collins")

console.table(nuevoArr) // ["Aldrin", "Collins"]

//---//

//función con return explícito. Si no usamos un return explícito, las funciones
// retornarán undefined

const sumar = (a, b) => {
    return a + b //este valor de retorno se devuelve desde la función a la línea que invocó la función
}

sumar(2, 4) //el resultado será 6, pero no lo veré porque no hago nada con el valor de retorno de la función
console.log(sumar(2, 4))  //aquí el console llama la función, la función le devuelve el valor y como console es un objeto especializado en mostrar mensajes por consola... pues lo muestra

const resultado = sumar(3, 7) //resultado almacenará 10, el valor de retorno de la función

//funciones con param por default
function restar(a, b) {
    return a - b
}

console.log(restar()) //esto retorna NaN (not a number) porque estamos restando undefined - undefined.

//esta versión de la función tienen valores por defecto para los parámetros
function restarBis(a = 0, b = 0) {
    return a - b
}
console.log(restarBis()) //esto no retorna undefined porque al no enviar argumentos, termina restando los valores por defecto (0-0 = 0)

//--//

//alcance, ámbito, scope de las variables y funciones
/* Ámbito de variables - Scope
   El Scope es la zona del programa en la que se define. JS define dos ámbitos para variables: local y global. Con var podemos definir como scope local el ámbito de una función.
   Con let, al contrario, podemos diferenciar también el ámbito de bloque.
   Síntesis: Desde el ámbito local, no puedo acceder al ámbito global... pero sí al revés
*/

function miFuncion() {
    let datoLocal = 45
    console.log(datoLocal) //45 porque estoy accediendo a la variable datoLocal dentro de su mismo ámbito de existencia    
    console.log(datoGlobal) //"que rico el mambo"    
}
// console.log(datoLocal) //Error: datoLocal is not defined
let datoGlobal = "que rico el mambo"
console.log(datoGlobal) // "que rico el mambo"

// Qué pasa si no declaramos a en el ámbito de la función Y lo declaramos en el bloque con var? Lo que está en el bloque más interno, declarado con var, puede ser accedido desde el bloque externo, pero lo que está definido en el bloque interno con let (o const), solamente puede ser accedido en ese bloque más interno.

function scopeB() {

    if (true) {
        var aConVar = "Ámbito de bloque, pero...";
        let aConLet = "Ámbito de bloque"
    }
    console.log("El ámbito de bloque 'a' es:", aConVar); //"Ámbito de bloque"
    // console.log("El ámbito de bloque 'a' es:", aConLet); //"Ámbito de bloque" esto rompe el programa, obviamente
}
scopeB();

//


/* Modo Estricto 
Se declara con "use strict" como primera línea de código, puede haber comentarios antes, pero no otras líneas de JS
No se pueden usar variables no declaradas. Fuera de una función tiene ámbito global. Dentro de una función, tiene ámbito local. Es decir, puede usarse modo estricto sólo dentro de una función y tendrá efecto allí únicamente. Si ponemos "use strinct" arriba de todo, se rompen otras cosas (línea 44... o por ahí). Enconces, podemos usar el modo estricto con ámbito local y lo ponemos en la función. Con el modo estricto dentro de la función, si comentan las líneas  139 y 140... se romperá. */

function info() {
    "use strict"
    let persona //declaramos las variables 
    let nacimiento // antes de asignarles valor
    persona = "Marcelo";
    nacimiento = 1900;
    console.log(persona, "nació en", nacimiento);
}
info();




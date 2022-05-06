const data = require("./data/data")

//1- el mundo ideal, idílico (no existe esto) síncrono... retorna los datos de inmediato
// const getData = () => {
//     console.clear();
//     return data
// }
// console.log(getData())

//2- introducimos un retardo para simular el proceso asincrónico que ocurre cuando buscamos datos en JS,
// el console log imprime undefined porque corre antes del getData, a pesar de que está después. Esto es debido a que los procesos asincrónicos se manejan fuera del call stack, en un procedimiento aparte y recién puede "correr" cuando se terminan de ejecutar los procesos sincrónicos del call stack. ** si quieren profundizar esto, busquen data sobre la pila de ejecución de JS y el Event Loop**

// const getData = () => {
//     console.clear();
//     setTimeout(() => {
//         return data
//     }, 0)
// }
// console.log(getData())

//3 Creamos una Promesa. Siempre va a retornar algo, será resolve o reject. El ciclo de una promesa: pending... fulfilled... rejected... pero NUNCA undefined

const getData = () => {
    const err = false
    console.clear();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            err ? reject("voló todo a la bosta") :
                resolve(data)
        }, 2000)
    })
}

getData()
    .then(data => console.log(data))

    .catch(err => console.log(err))
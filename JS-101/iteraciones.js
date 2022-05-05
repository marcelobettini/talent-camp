const animales = ["loro", "gato", "ornitorrinco", "puma", "yarará"]
console.log(animales.length) //4 (indx: 0, 1, 2, 3)
console.log(animales[0])
console.log(animales[1])
console.log(animales[2])
console.log(animales[3])

//mejor, iteremos el arreglo les presentamos el bucle for
//primer inicializo el contador que va a servir para seguir la cuenta de las veces que se ha ejecutado el código dentro del for.
//el segundo paso es la condición, ergo, se va a ejecutar el código dentro de las llaves mientras el contador no alcance esa condición
//
const len = animales.length
for (let i = 0; i < len; i++) {
    console.log(animales[i])
}

//podemos hacer lo mismo más fácil, con un método de los array llamado forEach

const retFromEach = animales.forEach((a) => {
    console.log("con un forEach:", a)
    return `1- ${a} ha sido liberado` //esto no puede sobreescribir la forma de trabajo de forEach, que siempre retornará undefined

})
console.log("Retorno de forEach:", retFromEach) //undefined
const retFromMap = animales.map((el, idx, arr) => {
    console.log("elemento:", el)
    console.log("índice:", idx)
    console.log("nuevo arreglo:", arr)


    return `${idx + 1}- ${el} ha sido liberado`

    //"1- " + a + " ha sido liberado"

})

console.log("Retorno de map:", retFromMap) //el nuevo arreglo

console.log(animales.map(el => el + " un animalito"))
console.log(animales.forEach(el => el + " un animalito"))

const nums = [-8, 7, 9, 1000, 40]

const result = nums.filter(num => num > 2000)
console.log(result)

//reduce

const arrNums = [1, 3, 5, 7, 4]
initValue = 0 //si no lo incluyo es siempre 0
const arrSum = arrNums.reduce((accum, currValue) => accum + currValue, initValue)
console.log(arrSum)
//prev 


const words = ["mandarina", "egocéntrico", "nube", "mandarina", "atómico", "nube", "zapato", "atómico", "nube"]
const repeticiones = words.reduce((accum, currWord) => {
    return { ...accum, [currWord]: (accum[currWord] || 0) + 1 }
}, {})
console.log(repeticiones)
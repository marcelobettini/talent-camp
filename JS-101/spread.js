/*Spread Operator (Operador de Propagación) Nos permite copiar rápidamente un array u objeto dentro de otro array u objeto */

const numbers = [1, 2, 3, 4, 5, 6];
const [uno, dos, ...rest] = numbers //rest es un nombre convencional, no una palabra reservada
console.log("arreglo numbers:", numbers) //1, 2...6
console.log("arreglo uno:", uno) //1
console.log("arreglo dos:", dos) //2
console.log("arreglo rest:", rest) //3...6

const miMaquina = {
    make: "Ford",
    model: "Mustang",
    color: "Red"
};

const enchulameLaMaquina = {
    type: "car",
    monsterSound: true,
    hydraulics: true,
    color: "Rainbow"
}

const miMaquinaEnchulada = { ...miMaquina, ...enchulameLaMaquina }
console.table(miMaquinaEnchulada)

/*En este ejemplo, necesitamos pasar los valores de un array a un método, pero ese método no puede recibir otra cosa que un tipo number */
console.log(Math.max(9, 56, 34)) //56
const nums = [9, 56, 34]
const result = Math.max(nums)
console.log(result)//NaN
console.log(Math.max(...nums)) //56

//También podemos concatenar arreglos
const arrNum = [1, 2]
const arrNames = ["Catalina", "Teodoro"]
const arrCombined = [...arrNum, ...arrNames]
console.log(arrCombined)

//También podemos trabajar con cadenas de texto
const famousWords = "Hello World"
console.log([...famousWords]) //retorna un arreglo donde cada letra es un elemento
console.log(...famousWords) //esta forma itera directamente sobre el string y devuelve cada uno de sus caracteres.





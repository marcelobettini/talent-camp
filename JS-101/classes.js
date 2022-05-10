//Las clases son templates o moldes para crear objetos.
//Una clase en JS es un tupo de función. Las clases se declaran con la palabra reservada class y su nombre debe ir con Mayúscula inicial.

class Dog {
    constructor(breed, age, isFemale) {
        this.breed = breed;
        this.age = age;
        this.isFemale = isFemale
    }
}

//Cuando tenemos una clase, podemos usarla para construir objetos. El método constructor se llama automáticamente cuando un nuevo objeto (instancia de clase) es creado
let laika = new Dog("German Shepperd", 6, true)
console.log(laika)

//Los métodos -un método es una función- de clase se crean con la misma sintaxis con los métodos de objetos

class DogWithMethod {
    constructor(breed, age, isFemale, bark) {
        this.breed = breed;
        this.age = age;
        this.isFemale = isFemale
        this.bark = bark;
    }
    speak() {
        return `this dog says ${this.bark}`
    }
}

const machaca = new DogWithMethod("Basset Hound", 7, true, "guau, arrrfff")
console.log(machaca.speak())
console.log(typeof DogWithMethod)
console.log(machaca instanceof (DogWithMethod))

//Herencia. La palabra reservada 'extends' se usa para crear una clase hija de otra clase (parent). La clase hija hereda todos los métodos de la clase padre. La herencia es útil para reusabilidad del código, permite reutilizar propiedades y métodos de una clase existente cuando creamos una clase nueva.

console.log(Date()) // fecha de hoy con formato completo
//supongan que no deseamos este formato largo.


//nuestro formateador de fechas tendrá sus propios métodos, pero heredará los de la clase Date.
class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
        return `${this.getDate()}/${months[this.getMonth()]}/${this.getFullYear()}`
    }
}

console.log(new DateFormatter(Date()).getFormattedDate())
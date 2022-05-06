// 6 maneras de iterar un objeto en JavaScript

let perro = {
  nombre: "Felicia",
  color: "Negro",
  hembra: true,
  edad: 5,
};

// 1. Usando la propiedad Object.keys() que devuelve un arreglo con todas las keys.
console.log(Object.keys(perro));
let claves = Object.keys(perro); // claves = ["nombre", "color", "hembra", "edad"]
for (let i = 0; i < claves.length; i++) {
  let clave = claves[i];
  console.log(perro[clave]);
}

// 2. Usando la propiedad Object.values() que retorna los valores
console.log(Object.values(perro));
let valores = Object.values(perro); // valores = ["Felicia", "Negro", true, 5];
for (let i = 0; i < valores.length; i++) {
  console.log(valores[i]);
}

// 3. Usando un bucle for...in
//The JavaScript for in statement loops through the properties of an Object
for (let key in perro) {
  console.log(perro[key]);
}

// 4. Usando la propiedad Object.entries() con un forEach()
console.log(Object.entries(perro));
Object.entries(perro).forEach(([key, value]) => {
  console.log(key, value);
});

// 5. Usando la propiedad Object.entries() y un bucle for...of
console.log(Object.entries(perro));
for (const [key, value] of Object.entries(perro)) {
  console.log(`Esta es la propiedad ${key} y su valor es: ${value}`);
}

//6, la más específica forma de obtener los nombres de las propiedades de un objeto
let nombres = Object.getOwnPropertyNames(perro);
console.log(nombres[1]);

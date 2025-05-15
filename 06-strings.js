//strings

// Strings (cadenas de texto)

// Concatenación

let myName = "AleDev"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0]) //Se accede al primer caracter. Secuenta de cero!
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("AleDev")) //Devuelve donde empieza el texto definido
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("AleDev"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 12)) // Sección del caracter 0 al 9 incluido el 10 NO lo incluye
console.log(greeting.replace("AleDev", "Alejandro")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, estoy
aprendiendo
JavaScript desde cero
esta entretenido!`
console.log(message)

// Interpolación de valores
let email = "aledev@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
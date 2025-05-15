/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    // Este es un comentario de una línea
// 2. Escribe un comentario en varias líneas
    /* 
    Este es un comentario
    de varias líneas
    */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let name = "Ale" // string
    let age = 30 // number
    let isMarried = false // boolean
    let address // undefined
    let phoneNumber = null // null
    let symbol1 = Symbol("mySymbol3") // symbol
    let bigInt1 = BigInt(123456789012213123123215678901234567890) // bigInt
    let bigInt2 = 123456789031123123215678901234567890n // bigInt (con n al final)
// 4. Imprime por consola el valor de todas las variables
    console.log(name)
    console.log(age)
    console.log(isMarried)
    console.log(address)
    console.log(phoneNumber)
    console.log(symbol1)
    console.log(bigInt1)
    console.log(bigInt2)
    console.log("---------------------------------------") 

// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof name)
    console.log(typeof age)
    console.log(typeof isMarried)
    console.log(typeof address)
    console.log(typeof phoneNumber)
    console.log(typeof symbol1)
    console.log(typeof bigInt1)
    console.log(typeof bigInt2)
    console.log("---------------------------------------") 
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    name = "Alejandro Programando" // string modificado
    age = 36  // number
    console.log(name)
    console.log(age)
    console.log("---------------------------------------") 


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    name = true
    console.log(name) // boolean
    age = "Adulto" // string
    console.log("---------------------------------------")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const name2 = "Ale Dev" // string
    const age2 = "Adulto" // number
    const isBeauty = false // boolean

// 9. A continuación, modifica los valores de las constantes
    // name2 = "Alejandro Programando" // string modificado
    // age2 = 36  // number
    // isBeauty = true // boolean
    console.log(name2)
    console.log(age2)
    console.log(isBeauty)
    console.log("---------------------------------------")
        // No se puede modificar el valor de una constante, por lo que esto generará un error
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
    // name2 = "Alejandro Programando" // string modificado
    // age2 = 36  // number
    // isBeauty = true // boolean
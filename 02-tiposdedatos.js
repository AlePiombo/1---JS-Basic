/*Datos primitivos
    String - cadena de texto
    Number - número
    Boolean - verdadero o falso
    Undefined - indefinido
    Null - nulo
    Symbol - símbolo
    BigInt - número entero grande
*/

//string - Cadena de texto
let name = "Ale"
let alias = "AlePiombo"
let email = "alejandropiombo1111111@gmail.com"

// number - Número
let age = 30
let height = 1.80
let weight = 80

// boolean - Verdadero o falso
let isMarried = false
let isSingle = true
let isStudent = true

// undefined - Indefinido - No tiene valor hasta que se le asigne un valor. La variable existe pero no tiene valor
let address
let phoneNumber


// null - Nulo - No tiene valor. La variable no existe intensionalmente. Le decimos que el valor es "VACIO"
let address2 = null
let phoneNumber2 = null

// symbol - Símbolo - Es un valor único e inmutable. Se utiliza para crear identificadores únicos para propiedades de objetos
let symbol1 = Symbol("mySimbol")
let symbol2 = Symbol("id")

// bigInt - Número entero grande - Se utiliza para representar números enteros grandes que no se pueden representar con el tipo Number
let bigInt1 = BigInt(1234567890123456789012345678901234567890)
let bigInt2 = 1234567890123456789012345678901234567890n //n al final para indicar que es un BigInt

// typeof - Tipo de dato - Devuelve el tipo de dato de una variable
console.log(typeof name) 
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof address)
console.log(typeof symbol1)
console.log(typeof bigInt1)
console.log(typeof bigInt2)
console.log(typeof address2) // va a ser OBJETO


/*
Falsy:
undefined (ej: address, phoneNumber)
null (ej: address2, phoneNumber2)
false (ej: isMarried)
0, NaN, "" (no tienes estos en tu código, pero también son falsy)

Truthy:
Cualquier string no vacío (ej: name, alias, email)
Cualquier número distinto de 0 y que no sea NaN (ej: age, height, weight)
true (ej: isSingle, isStudent)
Objetos y símbolos (ej: symbol1, symbol2)
BigInt (ej: bigInt1, bigInt2)
*/
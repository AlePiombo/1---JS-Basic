//Operadores


//Operadores Aritméticos
console.log(5 + 5); // Suma
console.log(5 - 1); // Resta

let a = 5
let b = 10
console.log(a + b);
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División
console.log(a % b); //Módulo --> Resto de la devisión
console.log(a ** b); //Exponencial
a++ //Incremento
console.log(a); //Incremento
b-- //Decremento
console.log(b); //Decremento

// Operadores de asignación

let myVariable = 2
console.log(myVariable); //2

myVariable += 2 //Suma 2 a la variable
myVariable = myVariable + 2 // es lo mismo
console.log(myVariable); //4

myVariable -= 2 //Resta 2 a la variable
myVariable *= 2 //Multiplica la variable por 2
myVariable /= 2 //Divide la variable por 2
myVariable %= 2 //Módulo de la variable por 2
myVariable **= 2 //Exponencial de la variable por 2

console.log("---------------------------OPERADODES DE COMPARACION------------------");
// Operadores de comparación
let c = 5
let d = 10

console.log(c > d); //Mayor que
console.log(c < d); //Menor que
console.log(c >= d); //Mayor o igual que
console.log(c <= d); //Menor o igual que

console.log(c == d); //Igualdad por valor
console.log(c=="5"); //Igualdad por valor
console.log(c === d); //Igualdad estricta por valor y tipo de dato
console.log(c === "5"); //Igualdad estricta por valor y tipo de dato

console.log(c != d); //Desigualdad por valor
console.log(c !== d); //Desigualdad estricta por valor y tipo de dato
console.log(c !== "5"); //Desigualdad estricta por valor y tipo de dato
console.log(c !== 5); //Desigualdad estricta por valor y tipo de dato

console.log("---------------------------Truthy y Falsy del cero------------------");

console.log(0 == false); //true
console.log(0 == 1); //false
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(0 == "String"); //false
console.log(0 == null); //false
console.log(0 == undefined); //false
console.log(0 == NaN); //false
console.log(0 == "undefined"); //false


console.log("---------------------------Operadores lógicos------------------");

// Operadores lógicos

//and (&&) - devuelve verdadero si ambas condiciones son verdaderas
console.log(5 > 10 && 10 > 20); //false - los dos falsos --> Falso
console.log(5 < 10 && 10 < 20); //true - los dos verdaderos --> Verdadero
console.log(5 < 10 && 10 > 20); //false - uno verdadero y otro falso --> Falso

//or (||) - devuelve verdadero si al menos una de las condiciones es verdadera
console.log(5 > 10 || 15 > 20); //false - los dos falsos --> Falso
console.log(5 < 10 || 10 < 20); //true - los dos verdaderos --> Verdadero
console.log(5 < 10 || 10 > 20); //true - uno verdadero y otro falso --> Verdadero

console.log(5 > 10 && 15 > 20 || 30 < 40 ); //true - el and es falso pero el or es verdadero

//not (!) - devuelve verdadero si la condición es falsa
console.log(!(5 > 10)); //true - el and es falso pero el or es verdadero

// Operador ternario
const isRaining = false

isRaining ? console.log("Llevar paraguas") : console.log("No llevar paraguas") //si es verdadero lleva paraguas, si no es falso no lleva paraguas


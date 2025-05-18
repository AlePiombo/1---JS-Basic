/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("Hola" + "Mundo");
// 2. Muestra la longitud de una cadena de texto
console.log("Hola".length);
// 3. Muestra el primer y último carácter de un string
console.log("El primer caracter es:" +"Hola"[0] + "  y el último caracter es" + "Hola"[3]);
// 4. Convierte a mayúsculas y minúsculas un string
console.log("Hola este es un texto con Mayusculas y minusculas para que se vea mejor".toUpperCase());
console.log("Hola este es un texto con Mayusculas y minusculas para que se vea mejor".toLowerCase());
// 5. Crea una cadena de texto en varias líneas
console.log(`Hola
Mundo esto esta
en varias lineas
`);
// 6. Interpola el valor de una variable en un string
let name = "Alejandro";
let mail = "AlePiombomail@gmail.com";
console.log(`Hola, mi nombre es ${name} y mi correo es ${mail.toLocaleLowerCase()}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let textLong = "Hola, mi nombre es Alejandro y mi correo es alepiombomail@gmail.com";
console.log(textLong.replaceAll(" ", "-"));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(textLong.includes("Alejandro")+ " Ejemplo verdadero con la palabra Alejandro");
console.log(textLong.includes("Pokemon")+ " Ejemplo falso con la palabra Pokemon");
// 9. Comprueba si dos strings son iguales
let text1 = "Hola";
let text2 = "Hola";
console.log((text1 === text2) + " Ejemplo verdadero con los textos iguales");

let text3 = "5";
let number = 5;

console.log((text3 === number) + " Ejemplo falso con el texto y el numero");  
console.log((text3 == number) + " Ejemplo verdadero pero con == de comparación debil con el mismo texto y el numero");  


// 10. Comprueba si dos strings tienen la misma longitud

console.log((text1.length === text2.length) + " Ejemplo verdadero con los textos iguales");
console.log((text1.length === text3.length) + " Ejemplo falso con el texto y el numero");
console.log((text1.length !== text3.length));

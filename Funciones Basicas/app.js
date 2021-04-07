//Implementa una función que muestre por consola “Hola Mundo”.

function sayHello() {
    return "Hello word";
}
console.log(sayHello());

// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.

function sayHelloPerson(name) {
    return "Hello " + name;
}
console.log(sayHelloPerson("Javi"));

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

function upperCase(string) {

    return string.toUpperCase();
}
console.log(upperCase("ama"));

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

function lowerCase(string) {
    return string.toLowerCase();
}
console.log(lowerCase("AMOR"));

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

var concatenarString = (texto1, texto2, texto3) => texto1 + texto2 + texto3;
console.log(concatenarString("La abuela", " te quiere ", "un montón."))

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.
empleado = {
    name: "Javi",
}

function crearPropiedad(obj) {
    obj.id = null;
}
crearPropiedad(empleado);
console.log(empleado);

var addParameter = (obj, propName, value) => {
    obj[propName] = value;
}
var miObjeto = {
    nombre: "Javi",
    edad: 37,
}
addParameter(miObjeto, "id", null);
console.log(miObjeto)
// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .
function isNullOrUndefined(parameter) {
    (parameter === undefined || parameter === null) ? true: false;

}

console.log(isNullOrUndefined(""))

// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
var negativeOrPositive = (number) => number < 0 ? console.log("Negativo") : console.log("Positivo")

negativeOrPositive(-2);

// Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
function mayorMenorOIgual(number) {
    if (number < 100) {
        console.log("Menor que 100");
    } else if (number > 100) {
        console.log("Mayor que 100");
    } else {
        console.log("Igual que 100");
    }
}
mayorMenorOIgual(101)

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.
user = {
    name: "Javi",
    edad: 23,
    ojos: "azules",
}

function nameOrNot(object) {
    if (object.name !== undefined) return object;
}

console.log(nameOrNot(user))
var objectHasName = (obj) => {
        if (obj.hasOwnProperty("name")) {
            return obj;
        } else {
            return "El objeto no tiene la propiedad";
        }

    }
    // console.log(objectHasName(user))

// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
/**
 * Esta función comprueba si a es divisible entre b
 * @param {*} a Este es el dividendo
 * @param {*} b  Este es el divisor
 * @returns 
 */
var isDivisible = (a, b) => (a % b === 0);

console.log(isDivisible(9, 3))

// Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.
var numberCharters = (str, n) => str.length == n;

console.log(numberCharters("cinco", 3))

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).
function dayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
    }
}
dayOfWeek(3);

// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
function monthOfYear(day) {
    switch (day) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Dieciembre");
            break;

    }
}
monthOfYear(3);


// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
array1 = [1, 2, 34, 214, 45, 3];
array2 = [2, 5, 46, 8, 3]
var lengthArray = (array1, array2) => {
    if (array1.length > array2.length) {
        return "Array1 es más largo"
    } else if (array1.length < array2.length) {
        return "Array2 es más largo"
    } else {
        return "Array1 es igual a Array2"
    }
}

console.log(lengthArray(array1, array2))

// Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.
var equalsArray = (arry1, arry2) => arry1[0] === arry2[0]
var arrayPosition = (arry1, arry2) => Array.isArray(arry1) && Array.isArray(arry2) && arry1[0] === arry2[0]

console.log(equalsArray(array1, array2))
console.log(arrayPosition(array1, array2))
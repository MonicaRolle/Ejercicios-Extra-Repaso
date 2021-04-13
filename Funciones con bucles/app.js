// Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.
var text = "Hola mundo"

var repeatText = (str, n) => {
    for (i = 0; i < n; + i++) {
        console.log(str)
    }
}
repeatText(text, 3)


// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.
var person = {
    name: "Luis",
    Edad: 23,
    sexo: "femenino"
}

var propertyObjet = obj => {
    var result = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) result++;
    }
    return result;
}
console.log(propertyObjet(person))


// Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
var showProperties = objeto => {
    for (var value in objeto) {
        console.log(objeto[value])
    }
}
showProperties(person);


// Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento  del array multiplicado por dicho número. Devuelve el resultado.
var sumArray = (array, number) => {
    var result = 0;
    for (var item of array) {
        result += item * number;
    }
    return result

}
console.log(sumArray([1, 2], 2));

// Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.
var chater = (str, target) => {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === target) result++
    }
    return result;

}
console.log(chater("Hola caracola", "a"))

// Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.
var firstAndLastElement = arry => {
    for (var item of arry) {
        console.log(item);
    }
}
firstAndLastElement(["hola", "adios", "hasta mañana"])


// Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.
var lastAndFistElement = arry => {
    for (var i = arry.length - 1; i >= 0; i--) {
        console.log(arry[i]);
    }
}
lastAndFistElement("hola")
    // Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.
var numStats = (arr, num) => {
    var result = [0, 0, 0];
    for (var item of arr) {
        if (item === num) result[1]++;
        else if (item < num) result[0]++;
        else result[2]++;
    }
    return result;

}
console.log(numStats([1, 5, 28, 3, 8, 9], 10))

// Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.
var anyInCommon = (arr1, arr2) => {
    for (var a of arr1) {
        for (var b of arr2) {
            if (a === b) return true;
        }
    }
    return false;
}
console.log(anyInCommon([1, 2, 3], [2, 3, 4]))

// // Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.
var swapFirstAndSecondElements = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
        var temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }
    console.log(arr1, arr2)
}

swapFirstAndSecondElements([1, 2, 3], [3, 2, 1])

// Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
var createObjet = (array) => {
    var result = {};
    for (var i = 0; i < array.length; i++) {
        var propName = "prop " + i;
        result[propName] = array[i];
    }
    return result;
}
console.log(createObjet(["name", "age", "sex"]))


// Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
// Muestra por consola cada elemento por el que iteres.
var runArray = (array, n) => {
    if (n < array.length && n >= 0) {
        for (var i = n; i < array.length; i++) {
            console.log(array[i])
        }
    }

}
runArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

var search = (arry, target) => {
    for (var item of arry) {
        if (item === target) return true;
    }
    return false;
}
console.log(search([1, 2, 3], 4))

// Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. 
// Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
// otra función equivalente que haga la traducción inversa.
var fEn = ["apple", "orange", "banana"];
var fEs = ["manzana", "naranja", "platano"];

var translateFruitsToEs = fruit => {
    var index = fEn.indexOf(fruit);
    if (index > -1) {
        return fEs[index];
    } else {
        return "No encontrado"
    }
}
console.log(translateFruitsToEs("orange"))

var translateFruitsToEn = fruit => {
    var index = fEs.indexOf(fruit);
    if (index > -1) {
        return fEn[index];
    } else {
        return "No encontrado"
    }
}
console.log(translateFruitsToEn("manzana"))


// Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
var swapText = str => {
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
}

console.log(swapText("hola"));

// Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
var funCapitals = str => {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += i % 2 === 0 ? str[i].toUpperCase() : str[i];
    }
    return result
}

console.log(funCapitals("Hola caracola"))

// Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
// de cada subarray y mostrarlos por consola.
var runArrayofArrays = array => {
    for (var subArr of array) {
        for (var item of subArr) {
            console.log(item)
        }
    }
}
var myArray = [
    [1, 2],
    ["inicio", "fin"]
];
runArrayofArrays(myArray)
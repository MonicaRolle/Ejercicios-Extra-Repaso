// Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,devuelva ‘undefined’.
array = [1, , 3]

var secondElement = (array) => {
    if (array[1] === undefined) {
        return undefined;
    } else {
        return array[1];
    }
}
var arrayNumb = ar => ar.length > 1 ? ar[1] : undefined;

console.log(secondElement(array))
console.log(arrayNumb(array))
    // Implementa una función que admita un string como parámetro y devuelva la última letra.

var lastLetter = str => str[str.length - 1];

console.log(lastLetter("amor"))

// Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el  resultado.

var fastFood = ["burguer", "pizza", "hotdog"];

var swapFirstAndLastElement = arry => {
    var tempElement = arry[0];
    var lastIndex = arry.length - 1;
    arry[0] = arry[lastIndex];
    arry[lastIndex] = tempElement;
    return arry;
}
console.log(swapFirstAndLastElement(fastFood))
/*
*
* Given an array of numbers arrOfNumbers and a number n, make a function 
* called findSum that will receive both as arguments and will return an
* array of two dimensional arrays where, each two dimensional array has
* all values/possibilities that, if summed up, the result will be the
* given number n.
*
* Example:
*
* input:
*
* arrOfNumbers = [1, 2, 3, 3, 4, 5]
* n = 6
*
* output:
*
* [[1, 5], [2, 4], [3, 3], [3, 3], [4, 2], [5, 1]]
*/

var findSum = (arrayOfNumbers, num) => {        
    var arrayOfNumbersResultado = [];     

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        for (var j  = 0; j < arrayOfNumbers.length; j++) {
            var soma = arrayOfNumbers[i] + arrayOfNumbers[j];
            if (soma === num && j !== i) {                   
                arrayOfNumbersResultado.push([arrayOfNumbers[i], arrayOfNumbers[j]]);                        
            }
        }        
    }
    return arrayOfNumbersResultado;
}


var teste = [1, 2, 3, 3, 4, 5];
var teste1 = [3, 1, 0, 6, 1];
var teste2 = [4, 2, 3, 3, 0, 6];
var teste3 = [0, 0, 0, 6, 6];
var teste4 = [6, 6, 6, 6, 6];
var num = 6;

console.log(findSum(teste3,num));


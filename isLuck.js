/*Geralmente, os números dos tickets consistem em um número
 par de dígitos. Um número de bilhete é considerado sortudo
  se a soma da primeira metade dos dígitos for igual à soma
do segundo

Exemplo: 
    1230 = true

    1+3 = 3  // 3+0 = 3

*/

var isLucky = n =>{
    var vetNumber = n.toString().split("");    
    var nucleo  = Math.round(vetNumber.length / 2);
    var metade1 = 0;
    var metade2 = 0;

    for(var i = 0; i < nucleo; i++){
        metade1 += parseInt(vetNumber[i]);
    }
    for(var i = nucleo; i < vetNumber.length; i++){
        metade2 += parseInt(vetNumber[i]);
    }

    return metade1 === metade2;
     
}

console.log(isLucky(1230));
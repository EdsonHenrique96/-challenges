/**
 * Dado um array de strings retorne um array com todas strings
 * maiores.
 */
        function allLongestStrings(inputArray) {
            var atual = 0;
            var menor = inputArray[0];
            var maior = inputArray[0];
            var prox = 0;
            var vetorMaiores = [];

            for (let i = 0; i < inputArray.length; i++) {
                for (let j = i + 1; j < inputArray.length; j++) {                    
                    prox = inputArray[j];
                    if (maior.length < prox.length)
                        maior = prox;
                }                    
                atual = inputArray[i];
                if ( atual.length >= maior.length)
                    vetorMaiores.push(atual);
            }

            return vetorMaiores;
    
        }
            var teste = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"];

            console.log(allLongestStrings(teste));

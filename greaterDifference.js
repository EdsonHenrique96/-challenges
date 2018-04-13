/**
 * Q3. Dado um vetor de números inteiros, crie uma função que retorna a maior
    diferença entre os elementos do vetor, de maneira que o menor número não
    tenha um indice maior do que o maior.

    Ex:
      input:
        vetorDeNumeros = [12, 7, 5, 8, 11, 9]

      output:
        6 (11-5)
 */

 const greaterDifferences = arr =>{

    /*let greaterInterval = 0;
     
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                if((arr[j] - arr[i]) > greaterInterval ){
                    greaterInterval = arr[j] - arr[i];
                }
            }
        }
    }

    return greaterInterval;*/

    let min = arr[0];
    let greaterInterval = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }if(min < arr[i]){            
            if(greaterInterval <  (arr[i] - min)){
                greaterInterval = arr[i] - min;
            }
        }    
    }

    return greaterInterval;
 }

 let test = [12, 7, 5, 8, 11, 9];
 let test1 = [6, 7, 5, 8, 11, 9];
 let test2 = [49, 50, 8, 11, 1, 9];
 let test3 = [-2, -8, -3, -5, -1];
 console.log(greaterDifferences(test3));
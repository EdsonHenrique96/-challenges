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
    let max = 0;
    let indiceMax = 0;
    let indiceMin = 0;
    let min = arr[0];

    let menor = arr[0];
    let maior = 0;

    for (let i = 0 ; i < arr.length ; i++) {   
        if (max < arr[i] && i !== 0) {
            max = arr[i];
            indiceMax = i;
        }
        if (min > arr[i] && i !== 0) {
            min = arr[i];
            indiceMin = i;
        }        
        if(indiceMax > indiceMin && i === arr.length-1) return  arr[indiceMax] - arr[indiceMin];
    }
    


    for (let i = 0 ; i < arr.length ; i++) {

        if (i < indiceMax && menor > arr[i] ) menor = arr[i];        
        if( i > indiceMax && maior < arr[i])  maior = arr[i];        
    }

    let part1 = arr[indiceMax] - menor;
    let part2 = arr[indiceMin] - maior;

    return part1 > part2 ? part1 : part2;
    

 }

 let test = [12, 7, 5, 8, 11, 9];
 let test1 = [6, 7, 5, 8, 11, 9];
 let test2 = [49, 50, 8, 11, 1, 9];
 console.log(greaterDifferences(test2));
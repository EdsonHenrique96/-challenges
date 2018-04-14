const swap = (array, p1, p2) =>{    
    array[p1] = array[p1] + array[p2];
    array[p2] = array[p1] - array[p2];
    array[p1] = array[p1] - array[p2];
    /*let aux = array[p1];
    array[p1] = array[p2];
    array[p2] = aux;*/

    return array;
}

const minSwap = array => {    
    let arraySwap = [];    
    let indice = 0;
    let verif = false;

    for (let i = 0; i < array.length; i++) {
        let numberLess = array[i];        
        for (let j = i+1; j < array.length; j++) {            
            if (array[j] < array[i]) {
                verif = true;                               
                if (array[j] < numberLess) {                                        
                    numberLess = array[j];                                        
                    indice = j;
                }
            }
            if (j+1 === array.length && verif) {
                arraySwap.push([array[i], numberLess]);
                array = swap(array, i, indice);
                verif = false;                
            }    
        }
    }

    stringAnswer = `Menor número possíveis de trocas ${arraySwap.length}
    trocas : ${arraySwap}`

    return stringAnswer;

}

let test = [3, 2, 1, 0];
let test1 = [1, 2, 3, 5, 6, 4, 8];

console.log(minSwap(test));
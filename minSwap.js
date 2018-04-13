const swap = (array, p1, p2) =>{    
    array[p1] += array[p2];
    array[p2] = array[p1] - array[p2];
    array[p1] = array[p2] - array[p1];

    return array;
}

const minSwap = array => {    
    let arraySwap = [];

    for(let i = 0; i < array.length; i++){
        let numberLess = array[0];
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[i] && array[j] < array[numberLess]){
                numberLess = j;
            }if(j+1 === array.length){
                arraySwap.push([array[i], numberLess]);
                array = swap(array, i, numberLess);                
            }
        }
    }
    return arraySwap;

}

let test = [3, 2, 1, 0];
const test1 = [1, 2, 3, 5, 6, 4, 8];

console.log(minSwap(test));
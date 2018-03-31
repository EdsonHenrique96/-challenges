/**
 * Metodo de ordenação 
 * burbble sort
 */

var burbblesort = list =>{
    var tamanho = list.length;

    for(var i = 0; i < tamanho; i++){
        for(var j = 0; j < tamanho; j++){
            if(list[j] > list[j+1]){
                var aux = list[j+1];
                list[j+1] = list[j];
                list[j] = aux;
            }
        }
    }

    return list;

}

var teste = [6, 5, 4, 3, 2, 1];
var teste1 = [60, 70, 80, 10, 20, 30,];
console.log(burbblesort(teste1));
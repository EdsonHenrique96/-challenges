/*Existe uma fila em um parque, e entre as pessoas existem arvores.

Objetivo é organizar as pessoas por sua altura em ordem crescente 
sem mover as arvores de lugar 

    para a = [-1, 150, 190, 170, -1, -1, 160, 180] a saida esperada é
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]
*/

var sortByHeight = a => {
    var vetorOrdenado = a;
    var tamanhoVetor = a.length;        
    var arvore = -1;    

    for(var i = 0; i < tamanhoVetor; i++){
        
        if(vetorOrdenado[i] !== arvore){
            var menor = i;
            for(var j = i+1; j < tamanhoVetor; j++){

                if(vetorOrdenado[j] !== arvore){
                    menor = vetorOrdenado[j] < vetorOrdenado[menor] ? j : menor; 
                }
                    
            }

            var aux = vetorOrdenado[i];
            vetorOrdenado[i]=vetorOrdenado[menor];
            vetorOrdenado[menor] = aux;
        }   

    }

    return vetorOrdenado;

}

var teste = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(sortByHeight(teste));
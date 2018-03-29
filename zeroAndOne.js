
/*var zeroAndOne = vetor =>{
    var vetorResultado = [];
    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] !== 0)
            vetorResultado.push(vetor[i]);
        else 
            vetorResultado.unshift(vetor[i]);    
    }

    return vetorResultado;
}*/

var zeroAndOne = vetor =>{        
    var resultado = vetor;
    var inicio = 0
    var final = (vetor.length - 1)

    for(var i = 0; i < vetor.length; i ++){

        if(vetor[i] === 0){
            resultado[inicio] = vetor[i];
            inicio++; 
        }else{
            resultado[final]=vetor[i];
            final--;
        }
    }

    return resultado;

}

var teste = [1,0,0,0,1,1,0,1];
var teste2 = [1,0];
var teste3 = [0,0,0,0,1,0,0];

console.log(zeroAndOne(teste3));

/*    var array1 = [];
    var array2 = [];     

    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] === 0)
            array1.push(vetor[i]);
        else
            array2.push(vetor[i]);           
    }
    
    return ;*/ 
let bemFormado = elemento =>{

    const referencia = [
        {
            valor: "(",
            fechamento : ")"
        },
        {
            valor: "[",
            fechamento : "]"
        },
        {
            valor: "{",
            fechamento: "}"
        }
    ];    

    let pilha = [];

    for (let i = 0; i < elemento.length; i++) {        
        if (elemento[i] === referencia[0].valor || elemento[i] === referencia[1].valor || elemento[i] === referencia[2].valor )
            pilha.push(elemento[i]);   
        else{ 
            for (let j = 0 ; j < referencia.length ; j++ ) {
                if (elemento[i] === referencia[j].fechamento) {
                    if (pilha[pilha.length-1] !== referencia[j].valor)
                        return false;                    
                    pilha.pop();
                } 
            }       
        }
    } 

    return pilha.length <= 0;
}

const teste = "[{()}]({[]})";

console.log(bemFormado(teste));

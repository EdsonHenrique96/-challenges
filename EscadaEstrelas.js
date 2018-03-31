/**
 * Desenhe uma escada alinhada á direita.
 */
function matrizEscada(tamanho){
    var count = tamanho-1;
    
    for(let i = 0; i < tamanho; i++){
        
        for(let j = 0; j< tamanho; j++){

            j >= count ? document.write("*"):document.write("&nbsp&nbsp");

        }
        document.write("<br>");
        count--;

    }
}            
matrizEscada(5);


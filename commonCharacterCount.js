/*Dado 2 string, retorna o numero de vezes que o caractere se repete
Exemplo :
    s1 = "aabcc" e s2="adcaa"
    retorno = 3
*/

var commonCharacterCount = (s1,s2) =>{
    var vetBase = s1.split("");
    var vetCompar = s2.split("");
    var count = 0;    

    for(var i = 0; i < vetBase.length; i++){
        for(var j = 0; j < vetCompar.length; j++){
            if(vetBase[i] === vetCompar[j]){
                vetCompar[j] = "";
                count++;
                break;
            }            
        }
    }

   return count;

}

commonCharacterCount("aabcc","adcaa");

/*
    Dado uma string em snakecase, retorne camelcase

    input : sou_dev     output:  souDev.
*/

var func = texto => {
    texto = texto.toLowerCase();
    var vet = [];
    const underScore = /_/g; //Expressão regular para buscar todas ocorrencias de underScore

    vet = texto.split("");

    for(var i = 0; i < vet.length; i++){
        if(vet[i] == "_")
            vet[i+1] = vet[i+1].toUpperCase();
    }

    texto = vet.join("");
    
    texto = texto.replace(underScore,"");

    return texto;
};

var testar = () =>{
    //Objeto de teste
    var dictionary = {
    'banana': 'banana',
    'this_is_not_a_drill': 'thisIsNotADrill',
    'silver_spoon': 'silverSpoon',
    'in_a_b_testing': 'inABTesting',
    'this_Was_Meant_To_Be': 'thisWasMeantToBe',
    'NOW_I_AM_MAD': 'nowIAmMad',
    'This_IS_a_REAL_Testcase': 'thisIsARealTestcase'
    };

    
    var compare = (word, expected) => {
        if (func(word) === expected)
            return "SUCESS";
        return "FAIL";
    }

    //comportamento de reflexão
    for (var word in dictionary){
        console.log(compare(word, dictionary[word]));
    }
}


testar();
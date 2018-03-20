/*var nome = "Edson_Batista";

//Tranforma para caixa baixa
var novoNome = nome.toLowerCase();

var vet = [];

for(var i = 0; i < novoNome.length; i++){   
        vet.push(novoNome.substring(i,i+1));        
}

for(var i = 0; i < vet.length; i++){   
    if(vet[i] === "_"){        
        vet[i+1]=vet[i+1].toUpperCase();           
    }       
}

var saida = vet.toString();

/*var virgula = eval('/'+","+'/g');
var underScore = eval('/'+"_"+'/g');

var texto = saida.replace(virgula,"");
texto = texto.replace(underScore,"");*/

//jeito errado rs

/*for(var i = 0; i < saida.length; i++){
    saida = saida.replace(",","");
    saida = saida.replace("_","");
}


console.log(saida);*/



//console.log(dictionary.this_is_not_a_drill);


var func = texto => {
    texto = texto.toLowerCase();
    var vet = [];

    for(var i = 0; i < texto.length; i++){
        vet.push(texto.substring(i,i+1));
    }

    for(var i = 0; i < vet.length; i++){
        if(vet[i] == "_")
            vet[i+1] = vet[i+1].toUpperCase();
    }

    texto = vet.join('');
    var underScore = /_/g;
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



















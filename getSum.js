
const getSum = text => {
    let stringSum = '';
    let number = 0;
    let finalResult = 0;


    for(let i = 0; i < text.length; i++){
        if(!isNaN(parseInt(text[i]))){
            stringSum += text[i];
            if(isNaN(parseInt(text[i+1]))){
                number = parseInt(stringSum);
                stringSum = '';
                finalResult += number; 
            }
        }
    }

    console.log(finalResult);
}

const teste = "01asd30as20";

getSum(teste);
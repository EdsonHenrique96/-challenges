/*
    Somar elementos da matriz.
    Se houver um zero na matriz todos elementos abaixo do zero
    não pode ser somados.

    exemplo: 

    input: 
    1  1  1
    2  2  2
    output:
    9
    
    input:
    1  0  0
    5  1  8
    output:
    6
*/    
    
    function matrixElementsSum(matrix) {
    var numeroColunas = matrix[0].length;
    var numeroLinhas = matrix.length
    var soma =0;

    for (let i = 0; i <  numeroColunas; i++) {                    
        for (let j = 0;j < numeroLinhas; j++) {
            if (matrix[j][i] == 0)
                break;
            soma += matrix[j][i];
                
            }

    }
    return soma; 
    
    }
    
    var teste = [[1, 1, 1],[2, 2, 2]];
    var teste2 = [[1, 0, 0],[5, 1, 8]];

    console.log(matrixElementsSum(teste2));

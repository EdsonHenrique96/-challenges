/**
 *  Dado um horário no formato 07:05:45PM.
 *  retorne 19:05:05.
 *  
 */
var clockFormart = time =>{
    var horas = parseInt(time.substring(0,2));
    var minutos = time.substring(3,5);
    var segundos = time.substring(6,8);
    var periodo = time.substring(8,10);

    if(periodo === "PM" && horas !== 12){
        horas += 12;
    }
    if(periodo === "AM" && horas === 12){
        horas += 12;
    }

    horas = horas >= 24 ? "00" : horas.toString();

    var resultado = horas + ":" + minutos + ":" + segundos;    

    return resultado;
}

var teste = "12:05:45AM";

console.log(clockFormart(teste));
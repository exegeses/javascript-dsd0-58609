//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//funciones de control
/**
 *  21:38:42
 */
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();
    
    //obtenemos las horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//invocamos a la función
reloj();

//actualizamos el llamado a la función horas
setInterval( reloj, 1000 );
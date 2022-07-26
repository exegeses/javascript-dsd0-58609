//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

/* variables con valores inicales */
let segundos = 0;
let minutos = 0;
let horas = 0;
let activo = false;

//funciones de control
function dosDigitos( numero )
{
    if ( numero < 10 ){
        numero = '0'+numero;
    }
    return numero;
}

function startCrono()
{
    segundos++;
    if( segundos > 59 ){
        segundos = 0;
        minutos++;
        if( minutos > 59 ){
            minutos = 0;
            horas++; 
        }
    }

    txt.innerText = dosDigitos(horas) + ":" + dosDigitos(minutos) + ":" + dosDigitos(segundos);
}
function start()
{
    if( activo == false ){
        intervalo = setInterval( startCrono, 1000 );   
        activo = true;
    }
}
function stop()
{
    clearInterval( intervalo );
    activo = false;
}
function reset()
{
    stop();
    horas = 0;
    minutos = 0;
    segundos = 0;
    txt.innerText = '00:00:00';

}


/*startCrono();
setInterval( startCrono, 1000 )*/

/*
versión Joaquín Cortez
let segundos = "00";
let minutos= "00";
let horas = "00";
let activo = false;

function startCronometro() {
    segundos++;
    if(segundos < 10){
        segundos = "0" + segundos;
    }else{  
        if (segundos > 59){
            segundos = "00";
            minutos++;
            if(minutos < 10){
                minutos = "0" + minutos;
            }else{
                if (minutos > 59){
                    minutos="00";
                    horas++;
                    if(horas < 10){
                        horas = "0" + horas;
                    }
                }
            }
        }
    }
    txt.innerHTML = horas + ":" + minutos + ":" + segundos;
}
*/
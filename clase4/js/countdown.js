//ubicamos elementos dentro del DOM
let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

//declaramos función de control
function dosDigitos( numero )
{
    if ( numero < 10 ){
        numero = '0'+numero;
    }
    return numero;
}

function countdown()
{
    /* creamos dos objeto de fecha */
    let ahora = new Date();
    //let final = new Date( 2023, 0, 1 ); año nuevo
    let final = new Date( 2022, 7, 17 );

    /* conversión a unix timestamp
        desde el 1º de enero de 1970 expresado en milisegundos  */
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas
    let diferencia = evento - actual; // en milisegundos

    /* obtenemos el tiempo en segundos, minutos, horas y dias */
    let segundos = Math.trunc( diferencia/1000 );
    let minutos =  Math.trunc( segundos/60 );
    let horas = Math.trunc( minutos/60 );
    let dias = Math.trunc( horas/24 );

    /* obtenejmos los sobrantes con el módulo % */
    horas = dosDigitos( horas%24 );
    minutos = dosDigitos( minutos%60 );
    segundos = dosDigitos( segundos%60 );

    //imprimimos en el HTML
    txtDias.innerText = dias;  
    txtHoras.innerText = horas;      
    txtMinutos.innerText = minutos;      
    txtSegundos.innerText = segundos      
}

countdown();
setInterval( countdown, 1000 );
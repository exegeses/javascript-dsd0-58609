console.log( 'saludos desde javascript' );

let numero = 0;
function contador()
{
    numero++;
    console.log( numero );
    if( numero === 328 ){
        clearInterval( lap );
    }
}

let lap = setInterval( contador, 300 );
let n = 0;//inicio o lanzamiento
while( n < 15 )
{ //condición o límite

    //bloque de código a iterar
    document.writeln( n + '<br>');
    n++;//imcremente
}

document.writeln('<hr>');

let marcas = [
    'Boss', 'Hermes', 'Zara', 
    'Aeropostale', 'Tommy', 'Hollister', 
    'Armany'
];
//document.write(n);
n = 0; //reseteamos n
let cantidad = marcas.length;
document.writeln('<ul>');
while( n < cantidad )
{
    document.write( '<li>'+ marcas[n] + '</li>');
    n++;
}
document.writeln('</ul>');

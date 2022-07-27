let marcas = [
                'Boss', 'Hermes', 'Zara', 
                'Aeropostale', 'Tommy', 'Hollister', 
                'Armany'
            ];

console.log( marcas );
document.write( marcas );
document.write('<br>');
document.write( marcas[3] );
document.write('<br>');
/* obtenemos número del día de la semana 
    Dom->0, Lun->1, Mar->2,
*/

let fecha = new Date();
let numDiaSemana = fecha.getDay();
document.write(numDiaSemana);
document.write('<br>');

let semana = [
    'Domingo', 'Lunes', 'Martes',
    'Miércoles', 'Jueves', 'Viernes',
    'Sábado'
 ];
 /* imprimimos el día de la semana */
 document.write( semana[ numDiaSemana ] );

 document.write('<br>');
 let ciudades = []; //array vacío
 ciudades[0] = 'Belin';
 ciudades[1] = 'Bahía Blanca';
 ciudades[2] = 'Londres';
 ciudades[3] = 'Roma';
 ciudades[4] = 'Bangcok';
 ciudades[5] = 'Milan';
 console.log( ciudades );
 ciudades[3] = 'París';
console.log( ciudades );

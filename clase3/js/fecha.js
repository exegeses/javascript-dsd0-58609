/*
* mostrar la fecha actual
* formato:   12/07/2022
* */

//ubicar elemento dentro del DOM
let txt = document.getElementById('txt');

//creamos un objewto de fecha
let fecha = new Date(); //Tue Jul 12 2022 19:24:25 GMT-0300 (hora estándar de Argentina)

//obtenemos número del día del mes
let diaMes = fecha.getDate();
//obtenemos el número del mes 0->ene, 1->feb
let mes = fecha.getMonth() + 1;
//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos en el span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;
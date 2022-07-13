//ubicar elemento dentro del DOM
let caja = document.getElementById('caja');

//declaramos función
function pintar( mensaje, fondo, texto )
{
    //código de mi función   
    caja.innerText = mensaje;
    caja.style.backgroundColor = fondo;
    caja.style.color = texto;
}




/** */
function primera()
{
    let x = 5;
    alert('soy la función primera');
}
function segunda()
{
    let n = 1;
    primera();
}

segunda()
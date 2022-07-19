// la caja input
let nombre = document.getElementById('nombre');
let txt = document.getElementById('txt');

//el valor escrito en la caja input
function verValor()
{
    txt.innerText = nombre.value;
}

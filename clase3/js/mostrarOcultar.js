//ubicar elemento dentro del DOM
let caja = document.getElementById('caja');
let estado = 'visible';//flag  

//declaración de función/es de control
function ocultar()
{
    //display:none;
    //visibility:hidden
    caja.style.display = 'none';
    estado = 'oculto';
}
function mostrar()
{
    //display:block;
    //visibility:visible
    caja.style.display = 'block';
    estado = 'visible';
}
function mostrarOcultar()
{
    /*  Sergio
    if( estado == 'oculto' ){
        caja.style.display = 'block';
        estado = 'visible';
    }
    else{
        caja.style.display = 'none';
        estado = 'oculto';
    }*/
    if( caja.style.display == 'none' ){
        //caja.style.display = 'block';
        mostrar();

    }
    else{
        //caja.style.display = 'none';
        ocultar();
    }
}
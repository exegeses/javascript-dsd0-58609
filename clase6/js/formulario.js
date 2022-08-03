//ubicamos elemento dentro del DOM
let buscador = document.getElementById('buscador');
let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let errNombre = document.getElementById('errNombre');

//addEventListener( 'click' )
buscador.addEventListener('click', function ( evento )
{
    console.log( evento );
    //evitamos la acción del elemento
    evento.preventDefault();
});

//addEventListener( 'submit' )
formulario.addEventListener( 'submit', function( evento )
{
    console.log( evento );
    //evitamos el envío del formulario
    evento.preventDefault();

    //obtenegamos el dato escrito en el campo nombre
    let datoNombre = nombre.value;
    if( datoNombre == '' || datoNombre == null ){
        errNombre.innerText = 'Complete el campo Nombre';
        return false;
    }
    //si llegamos hasta acá, enviamos el form
    formulario.submit();

});



window.alert("Bienvenido");
alert("Al día del libro!");

window.onload = function () {
    // Variables
    const IMAGENES = [
        'imagenes/autoayuda/buenosDiasAlegria.jpg',
        'imagenes/autoayuda/elFindelaAnsiedad.jpg',
        'imagenes/autoayuda/elSutilArte.jpg',
        'imagenes/autoayuda/genteToxica.jpg',
        'imagenes/autoayuda/metaHumano.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        // $botonPlay.removeAttribute('disabled');
        // $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // $botonPlay.addEventListener('click', playIntervalo);
    // $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 
//menú

var itemOrig;

function despMenu(nombre,sn)

{

obj = document.getElementById(nombre);

if (sn)

     obj.style.visibility = "visible";

else

     obj.style.visibility = "hidden";

}

function destacar(obj, val)

{

if (val)

     {

     itemOrig = obj.style.backgroundColor;

     obj.style.backgroundColor="Aqua";

     }

else

     obj.style.backgroundColor= itemOrig;

}
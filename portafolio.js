document.addEventListener('DOMContentLoaded', () => {
    EscribirMensaje();
});

function EscribirMensaje() {
    let mensaje = '!Hola!, soy ';
    let contador = 0;

    let dondeEscribir = document.getElementById('mensaje');

    let maquina = window.setInterval(function() {
        dondeEscribir.textContent += mensaje[contador];

        contador++;

        if (contador === mensaje.length){
            window.clearInterval(maquina);
            EscribirNombre();
        }
    }, 70);
}

function EscribirNombre() {
    let nombre = 'Exequiel Gonzalez';
    let contador = 0;

    let dondeEscribir = document.getElementById('mensaje');

    let maquina = window.setInterval(function() {
        dondeEscribir.innerHTML += `<strong class="estilo-nombre text-warning">${nombre[contador]}</strong>`

        contador++;

        if (contador === nombre.length){
            window.clearInterval(maquina);
            EscribirSaludo();
        }
    }, 70);
}

function EscribirSaludo() {
    let saludo = 'Muchas Gracias por pasarte por mi portafolio :)';
    let contador = 0;

    let dondeEscribir = document.getElementById('saludar');

    let maquina = window.setInterval(function() {
        dondeEscribir.textContent += saludo[contador];

        contador++;

        if (contador === saludo.length){
            window.clearInterval(maquina);
        }
    }, 70);
}
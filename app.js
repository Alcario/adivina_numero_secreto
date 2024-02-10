const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return parseInt(readlineSync.question('Ingresa un numero: '),10);
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido al juego de adivinanza!');
    console.log('Intenta adivinar el numero que estoy pensando entre 1 y 100.\n');

    while(true){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
        if(numeroAdivinado === numeroSecreto){
            break;
        }
    }
}

juegoAdivinanza();
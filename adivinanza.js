const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto){
        console.log("Felicidades, adivinaste el numero");
    }else if (numeroAdivinado > numeroSecreto){
        console.log("Demasiado alto");
    }else if (numeroAdivinado < numeroSecreto){
        console.log("Demasiado bajo");
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};
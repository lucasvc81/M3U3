const num1 = parseInt(prompt('Cuantos metros va a recorrer?:', ''));


if (num1 <=1000) {
    document.write(`Podes apovechar que son pocos metros e ir CAMINANDO`);
} else if (num1<=10000) {
    document.write(`Te recomendamos ir en BICICLETA`);
} else if (num1<=30000) {
    document.write(`Te recomendamos ir en COLECTIVO`);
} else if (num1<=100000) {
    document.write(`Te recomendamos ir en AUTO`);
} else {
    document.write(`Te recomendamos ir en AVION`);
} 
var numeros = ["6", "14", "98", "23"];

var mayor = 0;

for (var i = 0; i < numeros.length; i++) {
if (numeros[i] > mayor) {
mayor = numeros[i];
}
}

document.write('El mayor de ' + numeros + ' es ' + mayor);

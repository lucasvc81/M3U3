const num1 = parseInt(prompt('Ingrese primer número:', ''));
const num2 = parseInt(prompt('Ingrese segundo número:', ''));
const num3 = parseInt(prompt('Ingrese tercer número:', ''));

if (num1 > num2 && num1 > num3) {
    document.write(`el mayor es el  ${num1}`);
} else if (num2 > num3) {
    document.write(`el mayor es el  ${num2}`);
} else {
    document.write(`el mayor es el  ${num3}`);
}
function PromCalc(numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}

// Prueba de la función
const numeros = [5, 10, 15, 20];
const promedio = PromCalc(numeros);
console.log(`El promedio es: ${promedio}`);

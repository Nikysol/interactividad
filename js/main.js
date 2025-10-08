let nombre = "Nicole";
let edad = 21;
let esMayorDeEdad = edad >= 18
const TAU = 3.1416;

edad = 22;
console.log(`Hola ${nombre} tienes ${edad} años`);

function saludar(nombre="Mundo") {
    alert(`Hola ${nombre}`);
}

saludar();
saludar(nombre);
saludar("Nicole");
saludar("Juan");

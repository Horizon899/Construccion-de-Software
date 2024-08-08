// consola (log, info, warn, error, assert)
console.log("hola mundo!");
console.info("Información importante");
console.warn("aguas");
console.error("Te equivocaste");
console.assert(1==1);

let nombre = "Gael";
console.log("Hola " + nombre);

const precio = 100;
// Alcance de las variables
{
    let Perros=20;
    console.log(Perros);
}

// alert, prompt, confirm
alert('Los perros cuestan ${precio}'); 
const chilak_fav = prompt("Cuales son tus perros favoritos?");
console.log('Tus perros favoritos son ${chilak_fav}');

const is_hambre = confirm("Quieres un perro?")

if(is_hambre){
    console.info("Adopta un perro");
} else {
    console.warn("Regresa cuando quieras uno");
}

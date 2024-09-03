// Modulo http 
const http =require('http');
// Direccion IP del server
const hostname = '127.0.0.1';
//Puerto donde recibe datos 
const port = 3000;
//Crea el server (claramente) conocido como callback
const server = http.createServer((req, res)=> {
//Indica que la respuesta es exitosa
    res.statusCode = 200;
    // La respuesta será texto plano
    res.setHeader('Content-Type', 'text/plain');
    // Envia esta respuesta y termina la conexion
    res.end('Respuesta de skynet \n');
});

//hace que escuche el puerto y empieza a funcionar para imprimir el msj
server.listen(port,hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);

});
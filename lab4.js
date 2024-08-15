let numero = parseInt(prompt("Introduce un número:"));

document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i = 1; i <= numero; i++) {
    // Escribe una fila en la tabla con el número actual, su cuadrado y su cubo
    document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>");
    }

    document.write("</table>");
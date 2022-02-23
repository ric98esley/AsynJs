// Hace la intancia para http request
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Esta funcion permite traer los datos
const fechtData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        //hacer llamado de la url y que se maneje de forma asincrona
        xhttp.open('GET', url_api, true);
        // Escucha la respuesta
        xhttp.onreadystatechange =  (() => {
            // Evalua que este completa la conexion exitosamente
            if (xhttp.readyState === 4) {
                // Revisa que la respuesta haya llegado completa
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
                }
        });
        //Envio de la solicitud.
        xhttp.send();
    })
}

module.exports = fechtData;

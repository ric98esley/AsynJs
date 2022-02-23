// Hace la intancia para http request
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// url de la api
let API = 'https://rickandmortyapi.com/api/character/';


// Esta funcion permite traer los datos
function fechtData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //hacer llamado de la url y que se maneje de forma asincrona
    xhttp.open('GET', url_api, true);
    // Escucha la respuesta
    xhttp.onreadystatechange = function (event) {
        // Evalua que este completa la conexion exitosamente
        if (xhttp.readyState === 4) {
            // Revisa que la respuesta haya llegado completa
            if(xhttp.status === 200) {
                 //Estandar de node con callbacks, primer parametro error, segundo el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    //Envio de la solicitud.
    xhttp.send();
}


fechtData(API, function(error1, data1){
    if (error1) return console.error(error1);
    fechtData(API + data1.results[8].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fechtData(data2.origin.url, function (error3,data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

            console.log(API);
            console.log(API + data1.results[8].id); 
            console.log(data2.origin.url); 
        });
    });
});
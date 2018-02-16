const express = require('express');
const app = express();
// Lanzamos un servirdor con express


// settings
app.set('port', process.env.PORT || 3000); // VARIABLE QUE  NOS DA EL EL PUERTO CONFIGURADO SI NO DA ESA VARIABLE LE PUEDO DECIR QUE CONFIGURE EL PUERTO 3000


// middlewars Funciones que se ejecutan cada vez que se ejecuta una peticion

// routes

// statics files Que podemos enviar al navegador 


app.listen(3000, () => {
  console.log('server on port 3000')
});
// Iniciamos en el puerto 3000; y que me envie un mensaje

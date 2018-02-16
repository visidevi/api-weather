const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
// Lanzamos un servirdor con express


// settings
app.set('port', process.env.PORT || 3000); // VARIABLE QUE  NOS DA EL EL PUERTO CONFIGURADO SI NO DA ESA VARIABLE LE PUEDO DECIR QUE CONFIGURE EL PUERTO 3000

// configurar carpeta de vistas
app.set('views', path.join(__dirname, 'wiews'));
// le decimos que vamos a utilizar un motor de plantilla
app.set('view engine', 'ejs;');

// middlewars Funciones que se ejecutan cada vez que se ejecuta una peticion
app.use(morgan('dev'));

// routes (aqui añadimos todas las rutas de nuestra aplicacion)

app.use(require('../rautes/index.js')); 
// si la ruta ingresada no existe le decimos que responda un mensaje 404;
app.use((req,res) =>{
  res.status(404).end('404 La ruta que ingresaste no fue encontrada, 404 not found');

});

// statics files Que podemos enviar al navegador 
//que el servirdor conosca las carpetas
app.use(express.static(path.join(__dirname, 'public'))); //El metodo path concatena directiros para obtener la ruta correcta

app.listen(app.get('port'), () => {
  console.log('server on port 3000');
});
// Iniciamos en el puerto 3000; y que me envie un mensaje

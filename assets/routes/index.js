const express = require('express');
const router = express.Router(); // dentro de este objeto voy a poder definir nuevas rutas para mi servidor
// ESTA CARPETA SE ENCARGA DE DEFINIR LAS URL DEL SERVIDOR O DEL USURIO
router.get('/', (req,res) => {
  res.render('index');
});
// res.end('algunMensaje') al finalizar el llamado muestra el mensaje que escribimos

module.exports = router;


// // forescastio
// const ForecastIo = require('forecastio');
// let weather = new ForecastIo("609c705291760311f891bb4f266f6460");



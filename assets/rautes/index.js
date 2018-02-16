const express = require('express');
const router = express.Router(); // dentro de este objeto voy a poder definir nuevas rutas para mi servidor
// ESTA CARPETA SE ENCARGA DE DEFINIR LAS URL DEL SERVIDOR O DEL USURIO
router.get('/', (req, res) =>{
  res.end('welcome');

});

 module.exports = router;
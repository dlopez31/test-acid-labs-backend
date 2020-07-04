const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connection.openUri(
  'mongodb://localhost:27017/products-db',
  (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
  }
);

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
    mensaje: 'peticion realizada correctamente',
  });
});

app.listen(3000, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});

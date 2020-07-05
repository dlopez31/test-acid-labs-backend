const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  //   id: { type: Number, unique: true, require: [true, 'El id es necesario'] },
  id: { type: Number, unique: true, require: [true, 'El id es necesario'] },
  brand: { type: String, require: [true, 'La marca es necesaria'] },
  description: {
    type: String,
    require: [true, 'La la descripcion es nesesaria'],
  },
  image: { type: String, require: false },
  price: { type: Number, require: [true, 'El precio es nesesario'] },
});

// usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Product', productSchema);

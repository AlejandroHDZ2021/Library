const mongoose = require('mongoose');
const url = 'mongodb+srv://alejandro:KjdGXn2BdSC5ccW5@cluster0.n6uqn.mongodb.net/library?retryWrites=true&w=majority'

mongoose.connect(url, {}, () => {
    console.log('----------------')
    console.log('Conexion a la BD exitosa')
  });
  
  
  module.exports = mongoose
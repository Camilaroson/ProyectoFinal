const mongoose = require('mongoose')

const productoCollection = 'productos'

const productoSchema = new mongoose.Schema({
id: {type:Number, require:true},
timestamp:{type:Date,require:true},
nombre: {type:String , require:true , max:150},
descripcion: {type:String , require:true , max:200},
codigo: {type:Number, require:true},
foto: {type:String, require:true},
precio: {type:Number, require:true},
stock: {type:Number, require:true},


})

module.exports = mongoose.model(productoCollection ,productoSchema)




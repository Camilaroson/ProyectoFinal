import express from 'express';
const app = express()
var router = express.Router()
import {NuevoProducto} from '../service/producto.service'
const productoModel = require('../models/productosModel')

let productos : any [] = []

//----------------FILTROS----------------------------

//mostrar todos los productos

router.get('/', (req,res) => {
    productos.length >=0 ? res.json(productos) : res.sendStatus(404)
})

//mostrar producto segun NOMBRE
router.get('/:nombre',(req,res)=>{

    const nombre = req.params.nombre
      productoModel.findOne( {nombre: nombre} )
            .then(() => res.send(productos))
            .catch((err:any) => res.send(err))

    })
    


//mostrar producto según CODIGO

router.get('/:codigo',(req,res)=>{

    const {codigo} = req.params
   const productocodigo = productoModel.productos.find({codigo:5})
   console.log(productocodigo)
   
   


})


//agregar nuevo producto a la BD

router.post('/',(req,res) =>{
    const {id,timestamp, nombre,descripcion,codigo,foto,precio,stock} = req.body
    const producto = new NuevoProducto(id,timestamp,nombre,descripcion,codigo,foto, precio,stock)
    producto.id = productos.length+1
    productos.push(producto)
    const saveProducto = new productoModel(producto)
    saveProducto.save()
    res.send('Creado')
    
    
    
})

//modificar un producto

router.patch('/:id',(req,res)=>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
   if(!producto){
       res.sendStatus(404)
   }
   const{nombre,descripcion,foto,precio,stock} = req.body
   producto.nombre = nombre
   producto.descripcion = descripcion
   producto.foto = foto
   producto.precio = precio
   producto.stock = stock
   res.sendStatus(204)

})

//eliminar un producto

router.delete('/:id',(req,res) =>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
   if(!producto){
       res.sendStatus(404)
   }
   productos = productos.filter(producto=>producto.id != id)
   res.sendStatus(204)

})


module.exports = router

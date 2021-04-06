import express from 'express';
const app = express()
var router = express.Router()
import {NuevoProducto} from '../service/producto.service'
const productoModel = require('../models/productosModel')

let productos : any [] = []

//----------------FILTROS----------------------------

//mostrar todos los productos

router.get('/', (req,res) => {
   productoModel.find({})
   .then((productos:any) => res.send(productos))
   .catch((err:any) => res.send(err))

})

//mostrar producto segun NOMBRE 

router.get('/:nombre',(req,res)=>{

    const nombre = req.params.nombre
      productoModel.findOne( {nombre: nombre} )
            .then((productos:any) => res.send(productos))
            .catch((err:any) => res.send(err))

    })
    

//mostrar producto según CODIGO

router.get('/:codigo',(req,res)=>{
    const codigo = req.params.codigo
      productoModel.findOne( {codigo: codigo} )
            .then((productos:any) => res.send(productos))
            .catch((err:any) => res.send(err))
          
}) 


//agregar nuevo producto a la BD

router.post('/',(req,res) =>{

    const producto = req.body
    const saveProducto = new productoModel(producto)
    saveProducto.save()
    .then(() => res.sendStatus(201))
    .catch((err:any) => res.send(err))

})

//BUSCAR PRODUCTOS POR RANGO DE PRECIO 

router.get('/:precio',(req,res)=>{

    const precio = req.params.precio
      productoModel.find({ precio: {$exists:true, $gte:100, $lte:300}})
            .then((productos:any) => res.send(productos))
            .catch((err:any) => res.send(err))
   
})

//BUSCAR PRODUCTOS POR RANGO DE STOCK 

router.get('/:stock',(req,res)=>{

    const stock = req.params.stock
      productoModel.find({ stock: {$exists:true, $gte:5, $lte:10}})
            .then((productos:any) => res.send(productos))
            .catch((err:any) => res.send(err))          
   
})


module.exports = router

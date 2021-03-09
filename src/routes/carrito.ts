import express from 'express';
const app = express()
var router = express.Router()
import {Carrito} from '../service/carrito.service'
import {NuevoProducto} from '../service/producto.service'


let carrito : any [] = []


//mostrar productos del carrito

router.get('/', (req,res) => {
    carrito ? res.send(carrito) : res.sendStatus(404)
})

//mostrar producto del carrito segun id

router.get('/:id',(req,res)=>{

    const id = req.params.id
    const idCarrito = carrito.find(idCarrito => idCarrito.id == id)
  
    carrito ? res.send(idCarrito) : res.sendStatus(404)
})


//falta incorporar productos al carrito por su id de producto
//falta eliminar productos del carrito por su id de producto
module.exports = router;
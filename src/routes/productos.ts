import express, { Router } from 'express';
const app = express()
const router = Router()
app.use(express.json())
import {NuevoProducto} from '../service/producto.service'

let productos : any [] = []

//mostrar productos

app.get('/', (req,res) => {
    productos.length < 0 ? res.sendStatus(404) : res.send(productos)

})

//mostrar producto segun id
router.get('/:id',(req,res)=>{

    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
    producto ? res.json(producto) : res.sendStatus(404)
})


//agregar nuevo producto

router.post('/',(req,res) =>{
    const {id,timestamp, nombre,descripcion,codigo,foto,precio,stock} = req.body
    const producto = new NuevoProducto(id,timestamp,nombre,descripcion,codigo,foto, precio,stock)
    producto.id = productos.length+1
    productos.push(producto)
    
})

//modificar un producto

router.put('/:id',(req,res)=>{
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
//imports
import express, { Router } from 'express';
const app = express()
var router = express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}));



//router
app.use('/productos', require('./routes/productos'))
app.use ('/carrito',require('./routes/carrito'))

//conexion
app.listen(6666 , () =>{
    console.log('Servidor listo!')
})
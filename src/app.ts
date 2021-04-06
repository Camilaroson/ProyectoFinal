//imports
import express, { Router } from 'express';
const app = express()
var router = express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const mongoose = require('mongoose')

//router
app.use('/productos', require('./routes/productos'))
app.use ('/carrito',require('./routes/carrito'))

//conexion a MONGO

app.listen(6666 , () =>{
    mongoose.connect('mongodb://localhost:27017/PROYECT-CODER',
    {
     useNewUrlParser: true, 
     useUnifiedTopology: true
    }
   )

   .then( () => console.log('Conexión establecida'))
   .catch((err:any) => console.log(err))
})
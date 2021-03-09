//imports
import express, { Router } from 'express';
const app = require('express')()
app.use(express.urlencoded({extended:true}));
import fs from 'fs';
import path from 'path';
app.use(express.json)


//router
app.use('/productos', require("./routes/productos"))


//conexion
app.listen(8080 , () =>{
    console.log('Servidor listo!')
})
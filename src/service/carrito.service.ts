import {NuevoProducto} from './producto.service'


export class Carrito{
    id : number
    timestamp : Date
    productos : NuevoProducto[]

    constructor(id:number , timestamp: Date , productos:any[]){
        this.id = id
        this.timestamp = timestamp
        this.productos = productos
    }
}
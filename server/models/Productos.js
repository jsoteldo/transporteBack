import mongoose from "mongoose";


const productoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        requiered: true,
    },
    descripcion: {
        type: String,
        requiered: true,
        trim:true,
    },
    presentacion: {
        type: String,
        requiered: true,
        trim:true,
    },
    tipoArticulo: {
        type: String,
    },
    activo:{
        type:Boolean
    },
    fechaCreacion:{
        type:Date
    },
    fechaModificacion:{
        type:Date
    },
    fechaFin:{
        type:Date
    },
    usuarioCreacion:{
        type: String,
    },
    usuarioModificacion:{
        type: String,
    },
});

export default mongoose.model('Productos',productoSchema);
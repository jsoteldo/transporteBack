import mongoose from "mongoose";


const proveedorSchema = new mongoose.Schema({
    descripcion: {
        type: String,
    },
    representante: {
        type: String
    },
    registroFiscal: {
        type: String,
    },
    identificacionFiscal: {
        type: String,
    },
    direccion: {
        type: String,
    },
    distrito:{
        type:String
    },
    telefono:{
        type:number
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

export default mongoose.model('Proveedor',proveedorSchema);
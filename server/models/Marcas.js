import mongoose from "mongoose";


const marcaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        requiered: true,
    },
    descripcion: {
        type: String,
        requiered: true,
        trim:true,
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
    activo:{
        type:Boolean
    }
});

export default mongoose.model('Marcas',marcaSchema);
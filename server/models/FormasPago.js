import mongoose from "mongoose";


const formasPagoSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        requiered: true,
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

export default mongoose.model('FormasPago',formasPagoSchema);
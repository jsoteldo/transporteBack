import mongoose from "mongoose";

// Modelo para Distrito
const distritoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ciudadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    fechaCreacion:{type:Date},
    fechaModificacion:{type:Date},
    fechaFin:{type:Date},
    activo:{type:Boolean}
  });
  
export default mongoose.model('Distrito', distritoSchema);
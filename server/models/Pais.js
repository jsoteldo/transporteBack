import mongoose from "mongoose";
// Modelo para País
const paisSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fechaCreacion:{type:Date},
    fechaModificacion:{type:Date},
    fechaFin:{type:Date},
    activo:{type:Boolean}
  });
  
export default mongoose.model('Pais',paisSchema);
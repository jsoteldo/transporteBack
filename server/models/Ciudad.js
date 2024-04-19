import mongoose from "mongoose";

// Modelo para Ciudad
const ciudadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  provinciaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provincia', required: true },
  fechaCreacion:{type:Date},
  fechaModificacion:{type:Date},
  fechaFin:{type:Date},
  activo:{type:Boolean}
});

export default mongoose.model('Ciudad', ciudadSchema);
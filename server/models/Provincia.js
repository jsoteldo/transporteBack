import mongoose from "mongoose";

// Modelo para Provincia
const provinciaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  departamentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento', required: true },
  fechaCreacion:{type:Date},
  fechaModificacion:{type:Date},
  fechaFin:{type:Date},
  activo:{type:Boolean}
});

export default mongoose.model('Provincia', provinciaSchema);
import mongoose from "mongoose";

// Modelo para Departamento
const departamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  paisId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pais', required: true },
  fechaCreacion:{type:Date},
  fechaModificacion:{type:Date},
  fechaFin:{type:Date},
  activo:{type:Boolean}
});

export default mongoose.model('Departamento', departamentoSchema);
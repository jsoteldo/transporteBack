const mongoose = require('mongoose');

// Modelo para País
const paisSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

const Pais = mongoose.model('Pais', paisSchema);

// Modelo para Departamento
const departamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  paisId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pais', required: true }
});

const Departamento = mongoose.model('Departamento', departamentoSchema);

// Modelo para Provincia
const provinciaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  departamentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento', required: true }
});

const Provincia = mongoose.model('Provincia', provinciaSchema);

// Modelo para Ciudad
const ciudadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  provinciaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provincia', required: true }
});

const Ciudad = mongoose.model('Ciudad', ciudadSchema);

// Modelo para Distrito
const distritoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true }
});

const Distrito = mongoose.model('Distrito', distritoSchema);

module.exports = { Pais, Departamento, Provincia, Ciudad, Distrito };
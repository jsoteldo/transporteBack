import Objetos from '../models/Objetos.js';
import mongoose from 'mongoose';
import {MONGODB_URI} from '../config.js';

export const getObjetos = async (req, res) => {
    try {
        const objetos = await Objetos.find();
        console.error(objetos);
        res.send(objetos);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const cargaMasiva = async (req,res) => {
    console.log(req);
    const { coleccion, rows } = req.body;
    console.log(coleccion);
    console.log(rows);
  if (typeof coleccion !== 'string') {
    return res.status(400).json({ message: 'El nombre de la colección no es válido' });
  }

  // Conectar a la base de datos
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    return res.status(500).json({ message: 'Error al conectar a la base de datos' });
  }

  try {
    const Model = mongoose.model(coleccion);
    const insertedObjects = await Model.insertMany(rows);
    return res.json(insertedObjects);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Error al insertar los objetos' });
  }
    
};


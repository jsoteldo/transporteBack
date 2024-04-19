import Provincia from '../../models/Provincia.js';
import moment from 'moment';

export const getProvincias = async (req, res) => {
    try {const provincia = await Provincia.find();
        console.error(provincia);
        res.send(provincia);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createProvincia = async (req,res) => {
    try {
        const {nombre, departamentoId} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newProvincia = new Provincia({nombre, departamentoId,fechaCreacion,activo});
        console.log(newProvincia);
        await newProvincia.save();
        return res.json(newProvincia);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateProvincia = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedProvincia = await Provincia.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedProvincia);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteProvincia = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const provinciaRemoved = await Provincia.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!provinciaRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(provinciaRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getProvincia = async (req,res) => {
    try {
        const provincia = await Provincia.findById(req.params.id);
        if (!provincia) return res.sendStatus(404).json('Not Founded');
        return res.json(provincia);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
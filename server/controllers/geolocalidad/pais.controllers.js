import Pais from '../../models/Pais.js';
import moment from 'moment';

export const getPaises = async (req, res) => {
    try {const pais = await Pais.find();
        console.error(pais);
        res.send(pais);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createPais = async (req,res) => {
    try {
        const {nombre} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newPais = new Pais({nombre,fechaCreacion,activo});
        console.log(newPais);
        await newPais.save();
        return res.json(newPais);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updatePais = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedPais = await Pais.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedPais);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deletePais = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const paisRemoved = await Pais.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!paisRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(paisRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getPais = async (req,res) => {
    try {
        const pais = await Pais.findById(req.params.id);
        if (!pais) return res.sendStatus(404).json('Not Founded');
        return res.json(pais);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
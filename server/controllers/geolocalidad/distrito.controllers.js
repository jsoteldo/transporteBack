import Distrito from '../../models/Distrito.js';
import moment from 'moment';

export const getDistritos = async (req, res) => {
    try {const distrito = await Distrito.find();
        console.error(distrito);
        res.send(distrito);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createDistrito = async (req,res) => {
    try {
        const {nombre, ciudadId} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newDistrito = new Distrito({nombre, ciudadId,fechaCreacion,activo});
        console.log(newDistrito);
        await newDistrito.save();
        return res.json(newDistrito);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateDistrito = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedDistrito = await Distrito.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedDistrito);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteDistrito = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const distritoRemoved = await Distrito.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!distritoRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(distritoRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getDistrito = async (req,res) => {
    try {
        const distrito = await Distrito.findById(req.params.id);
        if (!distrito) return res.sendStatus(404).json('Not Founded');
        return res.json(distrito);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
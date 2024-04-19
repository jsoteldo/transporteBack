import Ciudad from '../../models/Ciudad.js';
import moment from 'moment';

export const getCiudades = async (req, res) => {
    try {const ciudad = await Ciudad.find();
        console.error(ciudad);
        res.send(ciudad);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createCiudad = async (req,res) => {
    try {
        const {nombre, provinciaId} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newCiudad = new Ciudad({nombre, provinciaId,fechaCreacion,activo});
        console.log(newCiudad);
        await newCiudad.save();
        return res.json(newCiudad);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateCiudad = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedCiudad = await Ciudad.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedCiudad);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteCiudad = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const ciudadRemoved = await Ciudad.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!ciudadRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(ciudadRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getCiudad = async (req,res) => {
    try {
        const ciudad = await Ciudad.findById(req.params.id);
        if (!ciudad) return res.sendStatus(404).json('Not Founded');
        return res.json(ciudad);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
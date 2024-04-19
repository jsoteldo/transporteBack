import Marcas from '../models/Marcas.js'
import moment from 'moment';

export const getMarcas = async (req, res) => {
    try {const marcas = await Marcas.find();
        console.error(marcas);
        res.send(marcas);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createMarcas = async (req,res) => {
    try {
        const {codigo, descripcion} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newMarca = new Marcas({codigo, descripcion,fechaCreacion,activo});
        console.log(newMarca);
        await newMarca.save();
        return res.json(newMarca);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateMarcas = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedMarca = await Marcas.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedMarca);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteMarcas = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const marcaRemoved = await Marcas.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!marcaRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(marcaRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getMarca = async (req,res) => {
    try {
        const marca = await Marcas.findById(req.params.id);
        if (!marca) return res.sendStatus(404).json('Not Founded');
        return res.json(marca);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
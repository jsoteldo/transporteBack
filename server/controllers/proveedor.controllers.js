import Proveedor from '../models/Proveedor.js'
import moment from 'moment';

export const getProveedores = async (req, res) => {
    try {const proveedor = await Proveedor.find();
        console.error(proveedor);
        res.send(proveedor);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createProveedor = async (req,res) => {
    try {
        const {codigo, descripcion} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newProveedor = new Proveedor({codigo, descripcion,fechaCreacion,activo});
        console.log(newProveedor);
        await newProveedor.save();
        return res.json(newProveedor);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateProveedor = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedProveedor = await Proveedor.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedProveedor);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteProveedor = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const marcaRemoved = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!marcaRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(marcaRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getProveedor = async (req,res) => {
    try {
        const marca = await Proveedor.findById(req.params.id);
        if (!marca) return res.sendStatus(404).json('Not Founded');
        return res.json(marca);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
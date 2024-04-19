import Departamento from '../../models/Departamento.js';
import moment from 'moment';

export const getDepartamentos = async (req, res) => {
    try {const departamento = await Departamento.find();
        console.error(departamento);
        res.send(departamento);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createDepartamento = async (req,res) => {
    try {
        const {nombre,paisId} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newDepartamento = new Departamento({nombre, paisId,fechaCreacion,activo});
        console.log(newDepartamento);
        await newDepartamento.save();
        return res.json(newDepartamento);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateDepartamento = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedDepartamento = await Departamento.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedDepartamento);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteDepartamento = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const departamentoRemoved = await Departamento.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!departamentoRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(departamentoRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getDepartamento = async (req,res) => {
    try {
        const departamento = await Departamento.findById(req.params.id);
        if (!departamento) return res.sendStatus(404).json('Not Founded');
        return res.json(departamento);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
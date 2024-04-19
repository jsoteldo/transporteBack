import FormasPago from '../models/FormasPago.js'
import moment from 'moment';

export const getFormasPago = async (req, res) => {
    try {const formasPago = await FormasPago.find();
        console.error(formasPago);
        res.send(formasPago);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createFormasPago = async (req,res) => {
    try {
        const {codigo, descripcion} = req.body;
        const fechaCreacion = moment().toDate();
        const activo = true;
        const newFormaPago = new FormasPago({codigo, descripcion,fechaCreacion,activo});
        console.log(newFormaPago);
        await newFormaPago.save();
        return res.json(newFormaPago);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateFormasPago = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedFormaPago = await FormasPago.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedFormaPago);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteFormasPago = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const formaPagoRemoved = await FormasPago.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!formaPagoRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(formaPagoRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getFormaPago = async (req,res) => {
    try {
        const formaPago = await FormasPago.findById(req.params.id);
        if (!formaPago) return res.sendStatus(404).json('Not Founded');
        return res.json(formaPago);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
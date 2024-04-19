import Productos from '../models/Productos.js'
import moment from 'moment';

export const getProductos = async (req, res) => {
    try {const productos = await Productos.find();
        console.error(productos);
        res.send(productos);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createProductos = async (req,res) => {
    try {
        const {codigo, descripcion, presentacion} = req.body;
        const newProducto = new Productos({codigo, descripcion, presentacion});
        console.log(newProducto);
        await newProducto.save();
        return res.json(newProducto);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const updateProductos = async (req,res) => {
    try {
        const updatedProducto = await Productos.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedProducto);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});

    }
    
}

export const deleteProductos = async (req,res) => {
    try {
        req.body.fechafin = moment().toDate();
        const productoRemoved = await Productos.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(productoRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getProducto = async (req,res) => {
    try {
        const producto = Productos.findById(req.params.id);
        if (!producto) return res.sendStatus(404).json('Not Founded');
        return res.json(producto);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};
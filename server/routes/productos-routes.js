import {Router} from 'express';
import {getProductos,createProductos,updateProductos,deleteProductos,getProducto} from '../controllers/productos.controllers.js';
const router = Router();


router.get('/productos', getProductos);
router.post('/productos', createProductos );
router.put('/productos/:id', updateProductos);
router.delete('/productos/:id',deleteProductos);
router.get('/productos/:id',getProducto);

export default router
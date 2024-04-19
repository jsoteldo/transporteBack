import {Router} from 'express';
import {getProveedores,createProveedor,updateProveedor,deleteProveedor,getProveedor} from '../controllers/proveedor.controllers.js';
const router = Router();


router.get('/proveedor', getProveedores);
router.post('/proveedor', createProveedor );
router.put('/proveedor/:id', updateProveedor);
router.put('/deleteProveedor/:id',deleteProveedor);
router.get('/proveedor/:id',getProveedor);

export default router
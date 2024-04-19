import {Router} from 'express';
import {getFormasPago,createFormasPago,updateFormasPago,deleteFormasPago,getFormaPago} from '../controllers/formasPago.controllers.js';
const router = Router();


router.get('/formaspago', getFormasPago);
router.post('/formaspago', createFormasPago );
router.put('/formaspago/:id', updateFormasPago);
router.put('/deleteFormasPago/:id',deleteFormasPago);
router.get('/formaspago/:id',getFormaPago);

export default router
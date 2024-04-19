import {Router} from 'express';
import {getDistritos,createDistrito,updateDistrito,deleteDistrito,getDistrito} from '../../controllers/geolocalidad/distrito.controllers.js';
const router = Router();


router.get('/distrito', getDistritos);
router.post('/distrito', createDistrito );
router.put('/distrito/:id', updateDistrito);
router.put('/deleteDistrito/:id',deleteDistrito);
router.get('/distrito/:id',getDistrito);

export default router
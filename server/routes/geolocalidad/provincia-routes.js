import {Router} from 'express';
import {getProvincias,createProvincia,updateProvincia,deleteProvincia,getProvincia} from '../../controllers/geolocalidad/provincia.controllers.js';
const router = Router();


router.get('/provincia', getProvincias);
router.post('/provincia', createProvincia );
router.put('/provincia/:id', updateProvincia);
router.put('/deleteProvincia/:id',deleteProvincia);
router.get('/provincia/:id',getProvincia);

export default router
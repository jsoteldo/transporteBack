import {Router} from 'express';
import {getPaises,createPais,updatePais,deletePais,getPais} from '../../controllers/geolocalidad/pais.controllers.js';
const router = Router();


router.get('/pais', getPaises);
router.post('/pais', createPais );
router.put('/pais/:id', updatePais);
router.put('/deletePais/:id',deletePais);
router.get('/pais/:id',getPais);

export default router
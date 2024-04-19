import {Router} from 'express';
import {getCiudades,createCiudad,updateCiudad,deleteCiudad,getCiudad} from '../../controllers/geolocalidad/ciudad.controllers.js';
const router = Router();


router.get('/ciudad', getCiudades);
router.post('/ciudad', createCiudad );
router.put('/ciudad/:id', updateCiudad);
router.put('/deleteCiudad/:id',deleteCiudad);
router.get('/ciudad/:id',getCiudad);

export default router
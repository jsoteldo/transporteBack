import {Router} from 'express';
import {getObjetos, cargaMasiva} from '../controllers/objetos.controllers.js';
const router = Router();


router.get('/objetos', getObjetos);
router.post('/cargaMasiva', cargaMasiva);

export default router
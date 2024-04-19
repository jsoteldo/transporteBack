import {Router} from 'express';
import {getMarcas,createMarcas,updateMarcas,deleteMarcas,getMarca} from '../controllers/marcas.controllers.js';
const router = Router();


router.get('/marcas', getMarcas);
router.post('/marcas', createMarcas );
router.put('/marcas/:id', updateMarcas);
router.put('/deleteMarcas/:id',deleteMarcas);
router.get('/marcas/:id',getMarca);

export default router
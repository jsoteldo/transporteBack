import {Router} from 'express';
import {getDepartamentos,createDepartamento,updateDepartamento,deleteDepartamento,getDepartamento} from '../../controllers/geolocalidad/departamento.controllers.js';
const router = Router();


router.get('/departamento', getDepartamentos);
router.post('/departamento', createDepartamento );
router.put('/departamento/:id', updateDepartamento);
router.put('/deleteDepartamento/:id',deleteDepartamento);
router.get('/departamento/:id',getDepartamento);

export default router
import {Router} from 'express';
import {getUsers,createUsers,updateUsers,deleteUsers,getUser,login} from '../controllers/users.controllers.js';
import authMiddleware  from  '../middleware/auth.js';
const router = Router();


router.get('/usuarios', authMiddleware, getUsers);
router.post('/usuarios', createUsers );
router.put('/usuarios/:id', authMiddleware,updateUsers);
router.put('/deleteUsuario/:id',authMiddleware,deleteUsers);
router.get('/usuarios/:id', authMiddleware, getUser);
router.post('/usuariosLogin',login);


export default router
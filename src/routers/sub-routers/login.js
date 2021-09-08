import express from 'express';
const router = express.Router();
import login from '../../app/controllers/Login.js'
import uploadMiddlewares from '../../app/middlewares/uploadsMiddleware.js';
router.get('/auto', login.auto);
router.post('/post', login.post);
router.post('/pass', login.pass);
router.put('/modifier/:id', uploadMiddlewares.upload.single('avt'), login.modifier);
export default router;
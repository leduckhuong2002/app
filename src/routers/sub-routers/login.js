import express from 'express';
const router = express.Router();
import login from '../../app/controllers/Login.js'
router.get('/auto', login.auto);
// router.post('/post', login.post);
export default router;
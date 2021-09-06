import express from 'express';
const router = express.Router();
import login from '../../app/controllers/Login.js'
router.get('/auto', login.auto);
export default router;
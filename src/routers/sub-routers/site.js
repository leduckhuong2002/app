import express from 'express';
const router = express.Router();
import site from '../../app/controllers/Site'
router.get('/', site.index);
export default router;
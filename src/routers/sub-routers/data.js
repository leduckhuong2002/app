import express from 'express';
const router = express.Router();
import data from '../../app/controllers/Data.js';
router.get('/show', data.show);
export default router;
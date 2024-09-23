import express from 'express';
import { getMenus } from '../controllers/ControllerMenu.js';

const router = express.Router();

// Get all menus Route
router.get('/getMenus', getMenus);

export default router;

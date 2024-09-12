import express from 'express';
import { getMenus, getMenu } from '../controllers/ControllerMenu.js';

const router = express.Router();

// get all menus
router.get('/getMenus', getMenus);
// get menu by id
// router.get('/getMenu/', getMenu);
export default router;

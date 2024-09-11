// import { Router } from 'express';
// import { getMenus } from '../controllers/ControllerMenu.js';

// const router = Router();
// router.get('/getMenus', getMenus);
// export default Router;

import { Router } from 'express';
import { getMenus } from '../controllers/ControllerMenu.js';

const router = Router();
router.get('/getMenus', getMenus);

export default router;

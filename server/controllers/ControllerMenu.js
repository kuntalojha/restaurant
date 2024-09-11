// import Menu from '../models/ModelMenu.js';

// export const getMenus = async (req, res) => {
//   try {
//     const menu = await Menu.find({});
//     if (!menu) {
//       return res.status(404).json({ message: 'Menu not found' });
//     } else {
//       res.status(200).json(menu);
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching a single menu', error });
//   }
// };

import Menu from '../models/ModelMenu.js';

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find({});
    if (menus.length === 0) {
      return res.status(404).json({ message: 'No menus found' });
    } else {
      res.status(200).json(menus);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menus', error });
  }
};

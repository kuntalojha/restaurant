import Menu from '../models/ModelMenu.js';

// Get all menus 
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

// // Get menu by id
// export const getMenu = async (req, res) => {
//   try{
//     const menu = await Menu.findById(req.params.id);
//     if (!menu) {
//       return res.status(404).json({ message: 'Menu not found' });
//     } else {
//       res.status(200).json(menu);
//     }
//   }
//   catch(error){
//     res.status(500).json({ message: 'Error fetching menu', error });
//   }
// }
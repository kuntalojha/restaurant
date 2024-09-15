// // // import './App.css';
// // // import React from 'react';
// // // import { Routes, Route } from 'react-router-dom';

// // // import Gallery from './components/common/Gallery';
// // // import UserHome from './pages/user/UserHome';
// // // import UserMenu from './pages/user/UserMenu';
// // // import UserItem from './pages/user/UserItem';
// // // import Login from './pages/auth/Login';
// // // import UserCheckOut from './pages/user/UserCheckOut';
// // // import NotFoundPage from './pages/common/NotFoundPage';
// // // import ChefMenu from './pages/chef/ChefMenu';
// // // import ChefHome from './pages/chef/ChefHome';

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Routes>
// // //         <Route path='/' element={<UserHome />} />
// // //         {/* Remove 'exact' and use relative path for 'item' */}
// // //         <Route exact path='/menu' element={<UserMenu />} />
// // //         {/* Little fix panding for relative path in item */}
// // //         <Route path='item' element={<UserItem />} />
// // //         <Route path='/gallery' element={<Gallery />} />
// // //         <Route path='/login' element={<Login />} />
// // //         <Route path='/card' element={<UserCheckOut />} />
// // //         <Route exact path='/chef' element={<ChefHome />}>
// // //           <Route path='/menu' element={<ChefMenu />} />
// // //         </Route>
// // //         {/* add Page Not Found */}
// // //         <Route path='*' element={<NotFoundPage />} />
// // //       </Routes>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import './App.css';
// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';

// // import Gallery from './components/common/Gallery';
// // import UserHome from './pages/user/UserHome';
// // import UserMenu from './pages/user/UserMenu';
// // import UserItem from './pages/user/UserItem';
// // import Login from './pages/auth/Login';
// // import UserCheckOut from './pages/user/UserCheckOut';
// // import NotFoundPage from './pages/common/NotFoundPage';
// // import ChefMenu from './pages/chef/ChefMenu';
// // import ChefHome from './pages/chef/ChefHome';

// // function App() {
// //   return (
// //     <div>
// //       <Routes>
// //         <Route path='/' element={<UserHome />} />
// //         <Route path='/menu' element={<UserMenu />} />
// //         <Route path='item' element={<UserItem />} />
// //         <Route path='/gallery' element={<Gallery />} />
// //         <Route path='/login' element={<Login />} />
// //         <Route path='/card' element={<UserCheckOut />} />
// //         <Route path='/chef' element={<ChefHome />}>
// //           {/* Use relative path for nested routes */}
// //           <Route path='menu' element={<ChefMenu />} />
// //         </Route>
// //         <Route path='*' element={<NotFoundPage />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// import './App.css';
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Gallery from './components/common/Gallery';
// import UserHome from './pages/user/UserHome';
// import UserMenu from './pages/user/UserMenu';
// import UserItem from './pages/user/UserItem';
// import Login from './pages/auth/Login';
// import UserCheckOut from './pages/user/UserCheckOut';
// import NotFoundPage from './pages/common/NotFoundPage';
// import ChefMenu from './pages/chef/ChefMenu';
// import ChefHome from './pages/chef/ChefHome';

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<UserHome />} />
//         <Route path='/menu' element={<UserMenu />} />
//         <Route path='item' element={<UserItem />} />
//         <Route path='/gallery' element={<Gallery />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/card' element={<UserCheckOut />} />
//         <Route path='/chef' element={<ChefHome />}>
//           <Route path='menu' element={<ChefMenu />} />
//         </Route>
//         <Route path='*' element={<NotFoundPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Gallery from './components/common/Gallery';
import UserHome from './pages/user/UserHome';
import UserMenu from './pages/user/UserMenu';
import UserItem from './pages/user/UserItem';
import Login from './pages/auth/Login';
import UserCheckOut from './pages/user/UserCheckOut';
import NotFoundPage from './pages/common/NotFoundPage';
import ChefMenu from './pages/chef/ChefMenu';
import ChefHome from './pages/chef/ChefHome';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/menu' element={<UserMenu />} />
        <Route path='item' element={<UserItem />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/card' element={<UserCheckOut />} />
        <Route path='/chef' element={<ChefHome />}>
          <Route path='menu' element={<ChefMenu />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

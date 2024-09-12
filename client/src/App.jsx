// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';

// import UserHome from './pages/user/UserHome';
// import Gallery from './components/common/Gallery';
// import UserMenu from './pages/user/UserMenu';
// import UserItem from './pages/user/UserItem';
// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route exact path='/' element={<UserHome />} />
//         <Route exact path='/menu' element={<UserMenu />}>
//           <Route exact path='/item' element={<UserItem />} />
//         </Route>
//         <Route exact path='/gallery' element={<Gallery />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import UserHome from './pages/user/UserHome';
import Gallery from './components/common/Gallery';
import UserMenu from './pages/user/UserMenu';
import UserItem from './pages/user/UserItem';
import Login from './pages/auth/Login';
import UserCheckOut from './pages/user/UserCheckOut';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserHome />} />
        {/* Remove 'exact' and use relative path for 'item' */}
        <Route exact path='/menu' element={<UserMenu />} />
        <Route path='item' element={<UserItem />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/card' element={<UserCheckOut />} />
      </Routes>
    </div>
  );
}

export default App;

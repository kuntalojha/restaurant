import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Gallery from './components/common/Gallery';
import UserHome from './pages/user/UserHome';
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

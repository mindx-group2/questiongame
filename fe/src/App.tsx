import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import JoinGame from './pages/join_game/join_game';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='join-game' element={<JoinGame />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

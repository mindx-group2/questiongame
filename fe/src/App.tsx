<<<<<<< HEAD
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import IngamePage from "./pages/ingame/ingame";
import { Routes, Route } from "react-router-dom";
=======
import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import JoinGame from './components/join_game/join_game';
import ManageQuestion from './pages/manage_question/manage_question';
import ResultPage from './pages/result_page/result_page';
import { Routes, Route } from 'react-router-dom';
>>>>>>> 94768f7 (fix git)

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
<<<<<<< HEAD
          <Route path="register" element={<Register />} />
          <Route path="game" element={<IngamePage />} />
=======
          <Route path='register' element={<Register />} />
          <Route path='join-game' element={<JoinGame title={"Question Game"} placeHolder={"Enter your name"} enterButton={"Let's go"} type={"join"}/>} />
          <Route path='start-page' element={<JoinGame title={"Question Game"} placeHolder={"Game PIN"} enterButton={"Enter"} type={"start"}/> } />
          <Route path='result' element={<ResultPage />} />
          <Route path='manage-question' element={<ManageQuestion />} />""
>>>>>>> 94768f7 (fix git)
        </Route>
      </Routes>
    </>
  );
}

export default App;

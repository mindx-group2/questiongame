import Login from "./pages/login/login";
import Register from "./pages/register/register";
import IngamePage from "./pages/ingame/ingame";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="game" element={<IngamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

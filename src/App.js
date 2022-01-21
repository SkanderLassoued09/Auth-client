import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Notfound from "./components/pages/Notfound";
import Privateroute from "./components/routing/Privateroute";
import Home from "./components/pages/Home";
import NavBar from "./components/pages/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Privateroute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;

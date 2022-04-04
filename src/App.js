import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      {/* NavBer */}
      <NavBar></NavBar>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>
    </div>
  );
}

export default App;

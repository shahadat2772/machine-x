import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";
import DashBoard from "./components/DashBoard/DashBoard";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      {/* NavBer */}
      <NavBar></NavBar>
      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* Review */}
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        {/* Not Found */}
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        {/* Dash Board */}
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;

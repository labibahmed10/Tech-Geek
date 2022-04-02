import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Videos from "./Components/Videos/Videos";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/singleblog/:blogid" element={<SingleBlog></SingleBlog>}></Route> */}
        <Route path="/singleblog/:blogid" element={<SingleBlog></SingleBlog>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

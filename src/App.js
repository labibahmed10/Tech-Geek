import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Components/signUp/SignUp";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Videos from "./Components/Videos/Videos";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/blogdetails/:blogid" element={<SingleBlog></SingleBlog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;

import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import { useEffect } from "react";
import BlogDetails from "./BlogDetails";

function App() {
  useEffect(() => {
    console.log("App loaded");
    debugger;
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

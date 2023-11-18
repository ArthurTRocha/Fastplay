import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Saibamais from "../pages/Saibamais.jsx"
import SaibamaisMobile from "../pages/SaibamaisMobile.jsx"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Saibamais" element={<Saibamais />}/>
        <Route path="SaibamaisMobile" element={<SaibamaisMobile />}/>
      </Routes>
    </Router>
  );
}

export default App;

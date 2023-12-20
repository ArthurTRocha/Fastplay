import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Saibamais from "../pages/Saibamais.jsx"
import SaibamaisMobile from "../pages/SaibamaisMobile.jsx"
import Cadastro from "../pages/Cadastro.jsx";
import CadastroMobile from "../pages/CadastroMobile.jsx";
import TrabalheConoscoMobile from "../pages/TrabalheConoscoMobile.jsx";
import TrabalheConosco from "../pages/TrabalheConosco.jsx";
import Admin from "../components/chat/Admin.jsx";
import Pagina404Pai from "../pages/Pagina404Pai.jsx";
import FeedbackPai from "../pages/FeedbackPai.jsx";
import FeedbackPaiMobile from "../pages/FeedbackPaiMobile.jsx";
import Obrigado from "../pages/ObrigadoPai.jsx";
import ObrigadoMobile from "../pages/ObrigadoPaiMobile.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Saibamais" element={<Saibamais />}/>
        <Route path="/SaibamaisMobile" element={<SaibamaisMobile />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
        <Route path="/CadastroMobile" element={<CadastroMobile />}/>
        <Route path="/TrabalheConoscoMobile" element={<TrabalheConoscoMobile />}/>
        <Route path="/TrabalheConosco" element={<TrabalheConosco />}/>
        <Route path="/Admin" element={<Admin />}/> 
        <Route path="*" element={<Pagina404Pai />}/>
        <Route path="/feedback" element={<FeedbackPai />}/>
        <Route path="/feedbackmobile" element={<FeedbackPaiMobile />}/>
        <Route path="/Obrigado" element={<Obrigado/>}/>
        <Route path="/ObrigadoMobile" element={<ObrigadoMobile/>}/>


      </Routes>
    </Router>
  );
}

export default App;

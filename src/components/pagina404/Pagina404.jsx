import React from 'react';
import "./pagina404.css"
import i404 from "../../assets/image/404.png"
import Seta2 from "../../assets/image/seta2.png"
import setamarrom2 from "../../assets/image/setamarrom2.png"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Pagina404 () {
    const { t } = useTranslation();

  return (
    <div className='pagina404'>
        <div className="header404"><Header/></div>

        <div className="setaCimaPai404">
        <div className="setaCima404">
        <Link to="/home"><img src={Seta2} alt="Seta" /></Link>
        </div>
        </div>
        <div className="imagemTexto404">
        <div className="image404">
            <img src={i404} alt="Pagina não encontrada" />
        </div>
      <h3>{t("Pagina404.Mensagem")}</h3>
      </div>
      <div className="setaBaixoPai404">
      <div className="setaBaixo404">
        <img src={setamarrom2} alt="Seta" />
      </div>
      </div>
      <div className="footer404"><Footer/></div>
    </div>
  );
};

export default Pagina404;

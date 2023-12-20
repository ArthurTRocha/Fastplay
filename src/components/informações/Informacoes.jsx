import React, { useState } from 'react';
import "./informacoes.css"
import Alcance from "../../assets/image/Alcance.png"
import Estrategias from "../../assets/image/Estrategias.png"
import Otimizacao from "../../assets/image/Otimizacao.png"
import ConstrucaoMarca from "../../assets/image/ConstrucaoMarca.png"
import Alcance2 from "../../assets/image/Alcance2.png"
import Estrategias2 from "../../assets/image/Estrategias2.png"
import Otimizacao2 from "../../assets/image/Otimizacao2.png"
import ConstrucaoMarca2 from "../../assets/image/ConstrucaoMarca2.png"
import { useTranslation } from 'react-i18next';

function Informacoes() {
  const { t } = useTranslation();
  const [imagemAlcance, setImagemAlcance] = useState(Alcance);
  const [imagemEstrategias, setImagemEstrategias] = useState(Estrategias);
  const [imagemOtimizacao, setImagemOtimizacao] = useState(Otimizacao);
  const [imagemConstrucaoMarca, setImagemConstrucaoMarca] = useState(ConstrucaoMarca);

  const handleMouseOver = () => {
    setImagemAlcance(Alcance2);
    setImagemEstrategias(Estrategias2);
    setImagemOtimizacao(Otimizacao2);
    setImagemConstrucaoMarca(ConstrucaoMarca2);
  };

  const handleMouseOut = () => {
    setImagemAlcance(Alcance);
    setImagemEstrategias(Estrategias);
    setImagemOtimizacao(Otimizacao);
    setImagemConstrucaoMarca(ConstrucaoMarca);
  };

  return (
    <div className="informacoes" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

      <div className="InconsInfomacoes">

        <div className="imagemalcance">
          <img src={imagemAlcance} alt="ImagemAlcance" />
          <div className='imagemalcancetexto'>{t("Informacoes.Maximizacao")}
          </div>
        </div>

        <div className="imagemestrategias">
          <img src={imagemEstrategias} alt="Estrategias" />
          <div className="imagemestrategiastexto"> {t("Informacoes.Personalizacao1")} {`\n`} {t("Informacoes.Personalizacao2")}
          </div>
        </div>

        <div className="imagemotimizacao">
          <img src={imagemOtimizacao} alt="Otimização" />
          <div className="imagemotimizacaotexto">
            {t("Informacoes.Otimizacao1")} {`\n`} {t("Informacoes.Otimizacao2")}

          </div>
        </div>

        <div className="imagemconstrutucao">
          <img src={imagemConstrucaoMarca} alt="ConstruçãoMarca" />
          <div className="imagemconstrutucaotexto">
            {t("Informacoes.Construcao1")} {`\n`} {t("Informacoes.Construcao2")}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Informacoes;

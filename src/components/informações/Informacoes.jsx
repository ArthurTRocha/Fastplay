import React from 'react';
import "./informacoes.css"
import Alcance from "../../assets/image/Alcance.png"
import Estrategias from "../../assets/image/Estrategias.png"
import Otimizacao from "../../assets/image/Otimizacao.png"
import ConstrucaoMarca from "../../assets/image/ConstrucaoMarca.png"


function informacoes() {
    return (
        <div className="informacoes">

            <div className="InconsInfomacoes">
                
            <div className="imagemalcance">
            <img src={Alcance} alt="" />
            <div className='imagemalcancetexto'>Maximização do Alcance
            </div></div>

            <div className="imagemestrategias">
            <img src={Estrategias} alt="" />
            <div className="imagemestrategiastexto">  Personalização das <br /> Estratégias
            </div></div>

            <div className="imagemotimizacao">
            <img src={Otimizacao} alt="" />
            <div className="imagemotimizacaotexto">
            Otimização de <br /> Recursos
           
            </div></div>

            <div className="imagemconstrutucao">
            <img src={ConstrucaoMarca} alt="" />
            <div className="imagemconstrutucaotexto">
            Construção de <br /> uma Marca <br /> Poderosa</div></div>
                
            </div>
        </div>
    )
}
export default informacoes;
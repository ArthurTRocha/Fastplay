import React, { useState } from "react";
import "./servicos.css"
import { useTranslation } from 'react-i18next';
import TP from "../../assets/image/Trafegopago.png"
import EVM from "../../assets/image/Estrategiamarketing.png"
import DSA from "../../assets/image/desenvolvimenoaplicativos.png"
import TR from "../../assets/image/Treinamentorepresentantes.png"
import DE from "../../assets/image/dadosestrtegicos.png"
import GR from "../../assets/image/gestaoredessociais.png"
import SM from "../../assets/image/socialmedia.png"
import MG from "../../assets/image/marketingpecommerce.png"

function Servicos() {


    function scrollToContato() {
        const envioEmail = document.getElementById('envioEmail');
        if (envioEmail) {
            envioEmail.scrollIntoView({ behavior: 'smooth' });
        }
    }

      
    const { t } = useTranslation();

    return (
        <div className="servico01">


            <div className="servicos">
                <h1>{t("Servicos.Potencialize")} <span>{t("Servicos.Potencialize2")}</span></h1>
                <p>{t("Servicos.Potencialize3")} {`\n`}
                    {t("Servicos.Potencialize4")}</p>

               
                <div className="cardSuperior">

                    <div className="card1Superior"><h3>{t("Servicos.Trafego")}</h3>
                    <div className="card1Superiorback">
                        <p className="TextoBack">{t("Servicos.cardback1")}{`\n`}
                        {t("Servicos.cardback1-2")}{`\n`}
                        {t("Servicos.cardback1-3")}{`\n`}
                        {t("Servicos.cardback1-4")}{`\n`}
                        {t("Servicos.cardback1-5")}{`\n`}
                        {t("Servicos.cardback1-6")}</p>
                            </div>
                        <div className="iconecardsuperior">
                            <div className="cardservicoimagem"><img src={TP} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={TP} alt="" /></div>

                        </div>
                    </div>


                    <div className="card2Superior"><h3>{t("Servicos.Estrategia")} {`\n`}
                        {t("Servicos.Estrategia2")} {`\n`}
                        {t("Servicos.Estrategia3")}</h3>
                        <div className="card2Superiorback">
                            <p className="TextoBack2">{t("Servicos.cardback2")}{`\n`}
                            {t("Servicos.cardback2-2")}{`\n`}
                            {t("Servicos.cardback2-3")}{`\n`}
                            {t("Servicos.cardback2-4")}{`\n`}
                            {t("Servicos.cardback2-5")}{`\n`}
                            {t("Servicos.cardback2-6")}{`\n`}
                            {t("Servicos.cardback2-7")}</p>
                            </div>
                        <div className="iconecardsuperior1">
                            <div className="cardservicoimagem"><img src={EVM} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={EVM} alt="" /></div>
                        </div>
                    </div>


                    <div className="card3Superior"><h3>{t("Servicos.Desenvolvimento")} {`\n`}
                        {t("Servicos.Desenvolvimento2")} {`\n`}
                        {t("Servicos.Desenvolvimento3")}</h3>
                        <div className="card3Superiorback">
                            <p className="TextoBack3">{t("Servicos.cardback3")}{`\n`}
                            {t("Servicos.cardback3-2")}{`\n`}
                            {t("Servicos.cardback3-3")}{`\n`}
                            {t("Servicos.cardback3-4")} {`\n`}
                            {t("Servicos.cardback3-5")} {`\n`}
                            {t("Servicos.cardback3-6")} {`\n`}
                            {t("Servicos.cardback3-7")}</p>
                            </div>
                        <div className="iconecardsuperior2">
                            <div className="cardservicoimagem"><img src={DSA} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={DSA} alt="" /></div>
                        </div>
                    </div>


                    <div className="card4Superior"><h3>{t("Servicos.Treinamento")} {`\n`}
                        {t("Servicos.Treinamento2")}</h3>
                        <div className="card4Superiorback">
                            <p className="TextoBack4">{t("Servicos.cardback4")}{`\n`}
                            {t("Servicos.cardback4-2")}{`\n`}
                            {t("Servicos.cardback4-3")}{`\n`}
                            {t("Servicos.cardback4-4")} {`\n`}
                            {t("Servicos.cardback4-5")}{`\n`}
                            {t("Servicos.cardback4-6")}{`\n`}
                            {t("Servicos.cardback4-7")} </p>
                            </div>
                        <div className="iconecardsuperior3">
                            <div className="cardservicoimagem"><img src={TR} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={TR} alt="" /></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="botaotraco">
                <div className="btnContrate1"></div>
                <div className="btnContrate2"> </div>
                <div className="btnContrate"><button onClick={scrollToContato}>{t("Servicos.Contrate")}</button></div></div>



            <div className="servico1">

            <div className="servicos">

                <div className="cardInferior">
                    
                    <div className="card1Inferior">
                        <h3>{t("Servicos.Gestao")} {`\n`}
                            {t("Servicos.Gestao2")} {`\n`}
                            {t("Servicos.Gestao3")}</h3>
                            <div className="card1Inferiorback">
                                <p className="TextoBack5">{t("Servicos.cardback5")} {`\n`}
                                {t("Servicos.cardback5-2")} {`\n`}
                                {t("Servicos.cardback5-3")} {`\n`}
                                {t("Servicos.cardback5-4")} {`\n`}
                                {t("Servicos.cardback5-5")}</p>
                                    </div>
                        <div className="iconecardInferior">
                            <div className="cardservicoimagem"><img src={DE} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={DE} alt="" /></div>
                        </div>
                    </div>


                    <div className="card2Inferior"><h3>{t("Servicos.Gestaors")} {`\n`}
                        {t("Servicos.Gestaors2")}</h3>
                        <div className="card2Inferiorback">
                                <p className="TextoBack6">{t("Servicos.cardback6")}{`\n`}
                                {t("Servicos.cardback6-2")}{`\n`}
                                {t("Servicos.cardback6-3")}{`\n`}
                                {t("Servicos.cardback6-4")}{`\n`}
                                {t("Servicos.cardback6-5")} {`\n`}
                                {t("Servicos.cardback6-6")}{`\n`}
                                {t("Servicos.cardback6-")}</p>
                                    </div>
                        <div className="iconecardInferior1">
                            <div className="cardservicoimagem"><img src={GR} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={GR} alt="" /></div>
                        </div>
                    </div>


                    <div className="card3Inferior"><h3>{t("Servicos.Profissional")} {`\n`}
                        {t("Servicos.Profissional2")} {`\n`}
                        {t("Servicos.Profissional3")}</h3>
                        <div className="card3Inferiorback">
                                <p className="TextoBack7">Desenvolvimento de{`\n`}
                                uma identidade de {`\n`}
                                marca única,{`\n`}
                                gerenciamento de{`\n`}
                                redes sociais, eficaz,{`\n`}
                                construção de{`\n`}
                                relacionamentos com{`\n`}
                                clientes</p>
                                    </div>
                        <div className="iconecardInferior2">
                            <div className="cardservicoimagem"><img src={SM} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={SM} alt="" /></div>
                        </div>
                    </div>


                    <div className="card4Inferior"><h3>{t("Servicos.Marketing")} {`\n`}
                        {t("Servicos.Marketing2")}</h3>
                        <div className="card4Inferiorback">
                                <p className="TextoBack8">Aumento das vendas{`\n`}
                                online, otimização de{`\n`}
                                páginas de produtos, {`\n`}
                                estratégias {`\n`}
                                promocionais eficazes, {`\n`}
                                expansão do {`\n`}
                                e-commerce</p>
                                    </div>
                        <div className="iconecardInferior3">
                            <div className="cardservicoimagem"><img src={MG} alt="" /></div>
                            <div className="cardservicoimagemback"><img src={MG} alt="" /></div>
                        </div>
                    </div>

                </div>


            </div>
            </div>





        </div>
    )
}
export default Servicos;
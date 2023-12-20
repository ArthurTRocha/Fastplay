import React, { useState } from "react";
import "./servicosmobile.css"
import { useTranslation } from 'react-i18next';
import TP from "../../../assets/image/Trafegopago.png"
import EVM from "../../../assets/image/Estrategiamarketing.png"
import DSA from "../../../assets/image/desenvolvimenoaplicativos.png"
import TR from "../../../assets/image/Treinamentorepresentantes.png"
import DE from "../../../assets/image/dadosestrtegicos.png"
import GR from "../../../assets/image/gestaoredessociais.png"
import SM from "../../../assets/image/socialmedia.png"
import MG from "../../../assets/image/marketingpecommerce.png"

function Servicos() {


    function scrollToentreContatoMobile() {
        const envioentreContatoMobile = document.getElementById('entreContatoMobile');
        if (entreContatoMobile) {
            entreContatoMobile.scrollIntoView({ behavior: 'smooth' });
        }
    }

      
    const { t } = useTranslation();

    return (
        <div className="servico01Mobile">


            <div className="servicosMobile" id="servicosMobile">
                <h1>{t("Servicos.Potencialize")} <span>{t("Servicos.Potencialize2")}</span></h1>
                <p>{t("Servicos.Potencialize3")} {`\n`}
                    {t("Servicos.Potencialize4")}</p>

               
                <div className="cardSuperiorMobile">

                    <div className="card1SuperiorMobile"><h3>{t("Servicos.Trafego")}</h3>
                    <div className="card1SuperiorbackMobile">
                    <p>{t("Servicos.cardback1")}</p>
                            </div>
                        <div className="iconecardsuperiorMobile">
                            <div className="cardservicoimagemMobile"><img src={TP} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={TP} alt="Card" /></div>

                        </div>
                    </div>


                    <div className="card3SuperiorMobile"><h3>{t("Servicos.Desenvolvimento")} {`\n`}
                        {t("Servicos.Desenvolvimento2")} {`\n`}
                        {t("Servicos.Desenvolvimento3")}</h3>
                        <div className="card3SuperiorbackMobile">
                            <p>{t("Servicos.cardback2")}</p>
                            </div>
                        <div className="iconecardsuperior2Mobile">
                            <div className="cardservicoimagemMobile"><img src={DSA} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={DSA} alt="Card" /></div>
                        </div>
                    </div>

                    <div className="card2SuperiorMobile"><h3>{t("Servicos.Estrategia")} {`\n`}
                        {t("Servicos.Estrategia2")} {`\n`}
                        {t("Servicos.Estrategia3")}</h3>
                        <div className="card2SuperiorbackMobile">
                            <p>{t("Servicos.cardback3")}</p>
                            </div>
                        <div className="iconecardsuperior1Mobile">
                            <div className="cardservicoimagemMobile"><img src={EVM} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={EVM} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card4SuperiorMobile"><h3>{t("Servicos.Marketing")} {`\n`}
                        {t("Servicos.Marketing2")}</h3>
                        <div className="card4SuperiorbackMobile">
                            <p>{t("Servicos.cardback4")}</p>
                            </div>
                        <div className="iconecardsuperior3Mobile">
                            <div className="cardservicoimagemMobile"><img src={TR} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={TR} alt="Card" /></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="botaotracoMobile">
                <div className="btnContrate1Mobile"></div>
                <div className="btnContrate2Mobile"> </div>
                <div className="btnContrateMobile"><button onClick={scrollToentreContatoMobile}>{t("Servicos.Contrate")}</button></div></div>



            <div className="servico1Mobile">

            <div className="servicosMobile">

                <div className="cardInferiorMobile">
                    
                    


                   
                    <div className="card1InferiorMobile">
                        <h3>{t("Servicos.Gestao")} {`\n`}
                            {t("Servicos.Gestao2")} {`\n`}
                            {t("Servicos.Gestao3")}</h3>
                            <div className="card1InferiorbackMobile">
                                <p>{t("Servicos.cardback5")}</p>
                                    </div>
                        <div className="iconecardInferiorMobile">
                            <div className="cardservicoimagemMobile"><img src={DE} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={DE} alt="Card" /></div>
                        </div>
                    </div>


                    


                    <div className="card3InferiorMobile"><h3>{t("Servicos.Profissional")} {`\n`}
                        {t("Servicos.Profissional2")} {`\n`}
                        {t("Servicos.Profissional3")}</h3>
                        <div className="card3InferiorbackMobile">
                                <p>{t("Servicos.cardback6")}</p>
                                    </div>
                        <div className="iconecardInferior2Mobile">
                            <div className="cardservicoimagemMobile"><img src={SM} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={SM} alt="Card" /></div>
                        </div>
                    </div>
                    <div className="card2InferiorMobile"><h3>{t("Servicos.Gestaors")} {`\n`}
                        {t("Servicos.Gestaors2")}</h3>
                        <div className="card2InferiorbackMobile">
                                <p>{t("Servicos.cardback7")}</p>
                                    </div>
                        <div className="iconecardInferior1Mobile">
                            <div className="cardservicoimagemMobile"><img src={GR} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={GR} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card4InferiorMobile"><h3>{t("Servicos.Marketing")} {`\n`}
                        {t("Servicos.Marketing2")}</h3>
                        <div className="card4InferiorbackMobile">
                                <p>{t("Servicos.cardback8")}</p>
                                    </div>
                        <div className="iconecardInferior3Mobile">
                            <div className="cardservicoimagemMobile"><img src={MG} alt="Card" /></div>
                            <div className="cardservicoimagembackMobile"><img src={MG} alt="Card" /></div>
                        </div>
                    </div>

                </div>


            </div>
            </div>





        </div>
    )
}
export default Servicos;
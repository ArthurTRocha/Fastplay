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


    function scrollToentreContato() {
        const entreContato = document.getElementById('entreContato');
        if (entreContato) {
            entreContato.scrollIntoView({ behavior: 'smooth' });
        }
    }

      
    const { t } = useTranslation();

    return (
        <div className="servico01">


            <div className="servicos" id="servicos">
                <h1>{t("Servicos.Potencialize")} <span>{t("Servicos.Potencialize2")}</span></h1>
                <p>{t("Servicos.Potencialize3")} {`\n`}
                    {t("Servicos.Potencialize4")}</p>

               
                <div className="cardSuperior">

                    <div className="card1Superior"><h3>{t("Servicos.Trafego")}</h3>
                    <div className="card1Superiorback">
                        <p className="TextoBack">{t("Servicos.cardback1")}</p>
                            </div>
                        <div className="iconecardsuperior">
                            <div className="cardservicoimagem"><img src={TP} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={TP} alt="Card" /></div>

                        </div>
                    </div>


                    <div className="card2Superior"><h3>{t("Servicos.Estrategia")} {`\n`}
                        {t("Servicos.Estrategia2")} {`\n`}
                        {t("Servicos.Estrategia3")}</h3>
                        <div className="card2Superiorback">
                            <p className="TextoBack2">{t("Servicos.cardback2")}</p>
                            </div>
                        <div className="iconecardsuperior1">
                            <div className="cardservicoimagem"><img src={EVM} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={EVM} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card3Superior"><h3>{t("Servicos.Desenvolvimento")} {`\n`}
                        {t("Servicos.Desenvolvimento2")} {`\n`}
                        {t("Servicos.Desenvolvimento3")}</h3>
                        <div className="card3Superiorback">
                            <p className="TextoBack3">{t("Servicos.cardback3")}</p>
                            </div>
                        <div className="iconecardsuperior2">
                            <div className="cardservicoimagem"><img src={DSA} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={DSA} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card4Superior"><h3>{t("Servicos.Treinamento")} {`\n`}
                        {t("Servicos.Treinamento2")}</h3>
                        <div className="card4Superiorback">
                            <p className="TextoBack4">{t("Servicos.cardback4")}</p>
                            </div>
                        <div className="iconecardsuperior3">
                            <div className="cardservicoimagem"><img src={TR} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={TR} alt="Card" /></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="botaotraco">
                <div className="btnContrate1"></div>
                <div className="btnContrate2"> </div>
                <div className="btnContrate"><button onClick={scrollToentreContato}>{t("Servicos.Contrate")}</button></div></div>



            <div className="servico1">

            <div className="servicos">

                <div className="cardInferior">
                    
                    <div className="card1Inferior">
                        <h3>{t("Servicos.Gestao")} {`\n`}
                            {t("Servicos.Gestao2")} {`\n`}
                            {t("Servicos.Gestao3")}</h3>
                            <div className="card1Inferiorback">
                                <p className="TextoBack5">{t("Servicos.cardback5")}</p>
                                    </div>
                        <div className="iconecardInferior">
                            <div className="cardservicoimagem"><img src={DE} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={DE} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card2Inferior"><h3>{t("Servicos.Gestaors")} {`\n`}
                        {t("Servicos.Gestaors2")}</h3>
                        <div className="card2Inferiorback">
                                <p className="TextoBack6">{t("Servicos.cardback6")}</p>
                                    </div>
                        <div className="iconecardInferior1">
                            <div className="cardservicoimagem"><img src={GR} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={GR} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card3Inferior"><h3>{t("Servicos.Profissional")} {`\n`}
                        {t("Servicos.Profissional2")} {`\n`}
                        {t("Servicos.Profissional3")}</h3>
                        <div className="card3Inferiorback">
                                <p className="TextoBack7">{t("Servicos.cardback7")}</p>
                                    </div>
                        <div className="iconecardInferior2">
                            <div className="cardservicoimagem"><img src={SM} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={SM} alt="Card" /></div>
                        </div>
                    </div>


                    <div className="card4Inferior"><h3>{t("Servicos.Marketing")} {`\n`}
                        {t("Servicos.Marketing2")}</h3>
                        <div className="card4Inferiorback">
                                <p className="TextoBack8">{t("Servicos.cardback8")}</p>
                                    </div>
                        <div className="iconecardInferior3">
                            <div className="cardservicoimagem"><img src={MG} alt="Card" /></div>
                            <div className="cardservicoimagemback"><img src={MG} alt="Card" /></div>
                        </div>
                    </div>

                </div>


            </div>
            </div>





        </div>
    )
}
export default Servicos;
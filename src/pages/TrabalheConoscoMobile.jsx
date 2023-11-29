import React from "react";
import TrabalheConosco1Mobile from "../components/trabalheconosco/trabalheconoscomobile/trabalheconosco1mobile/trabalheconosco1mobile";
import TrabalheConosco2Mobile from "../components/trabalheconosco/trabalheconoscomobile/trabalheconosco2mobile/trabalheconosco2mobile";
import HeaderMobile from "../components/header/headermobile/HeaderMobile";
import FooterMobile from "../components/footer/footermobile/FooterMobile";

function TrabalheConoscoMobile() {
    return (
    <div className="trabalheConoscoMobile">
        <HeaderMobile/>
        <TrabalheConosco2Mobile/>
        <TrabalheConosco1Mobile/>
        <FooterMobile/>
    </div>
)}
export default TrabalheConoscoMobile;
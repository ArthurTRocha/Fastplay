import React from "react";
import FeedbackMobile from "../components/feedback/feedbackMobile/FeedbackMobile";
import FooterMobile from "../components/footer/footermobile/FooterMobile";
import HeaderMobile from "../components/header/headermobile/HeaderMobile";

function FeedbackPaiMobile () {
    window.scrollTo(0, 0);

    return(
        <div className="feedbackPaiMobile">
            <HeaderMobile/>
            <FeedbackMobile/>
            <FooterMobile/>
        </div>
    )
}
export default FeedbackPaiMobile;
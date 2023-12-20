import React from "react";
import "../styles/feedbackpai.css"
import Feedback from "../components/feedback/Feedback";


function FeedbackPai () {
    window.scrollTo(0, 0);
    
    return (
        <div className="feedbackPai">
            <Feedback/>
        </div>
    )
}
export default FeedbackPai;
import React from "react";
import "../styles/pagina404pai.css"
import Pagina404Mobile from "../components/pagina404/pagina404Mobile/Pagina404Mobile";
import Pagina404 from "../components/pagina404/Pagina404"
function Pagina404Pai(){
    return (
        <div className="Pagina404Pai">

            <div className="pagina4044">
                <Pagina404/>
            </div>

            <div className="pagina404Mobilee">
                <Pagina404Mobile/>
            </div>

        </div>
    )
}
export default Pagina404Pai;
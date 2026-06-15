import React from "react";

function Navbar(){
    return(
        
        <nav className="navbar">
            
            <img src="/public/word_art.png" alt="Curvature Studio" className="logo"/>
            
            <div className="buttonwrapper">
                <button className="firstthreebutton">WORK</button>
                <button className="firstthreebutton">SERVICES</button>
                <button className="firstthreebutton">ABOUT</button>
                <button className="firstthreebutton" id="contactbutton">CONTACT</button>
            </div>
        </nav>

    )
}
export default Navbar
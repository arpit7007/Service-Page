import React from "react";

function Navbar(){
    return(
        
        <nav className="navbar">
            <div className="logo">
                <h1>CURVATURE</h1>
                <div className="studio-wrapper">
                    <span className="line"></span>
                    <span className="studio">STUDIO</span>
                    <span className="line"></span>
                </div>
            </div>
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
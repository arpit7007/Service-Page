import React from "react";

function Navbar(){
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav className="navbar">
            <img 
                src="/word_art.png" 
                alt="Curvature Studio" 
                className="logo" 
                onClick={() => handleScroll("home")}
                style={{ cursor: "pointer" }}
            />
            
            <div className="buttonwrapper">
                <button className="firstthreebutton" onClick={() => handleScroll("projects")}>WORK</button>
                <button className="firstthreebutton" onClick={() => handleScroll("process")}>PROCESS</button>
                <button className="firstthreebutton" onClick={() => handleScroll("services")}>SERVICES</button>
                <button className="firstthreebutton" onClick={() => handleScroll("about")}>ABOUT</button>
                <button className="firstthreebutton" id="contactbutton" onClick={() => handleScroll("contact")}>CONTACT</button>
            </div>
        </nav>
    )
}

export default Navbar
import React from "react";

function Workbutton(){
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <button className="workbutton" onClick={() => handleScroll("process")}>VIEW OUR WORK</button>
    )
}

export default Workbutton
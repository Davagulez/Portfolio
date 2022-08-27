import React from "react";
import {FaCode} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import '../assets/css/navbar.css'


function Navbar() {
    return (
        <>
            <nav className="navBar">
            <section className="nombreNav">
            <IconContext.Provider value={{className: "codeIcon"}}>
                <span>
                    <FaCode/>
                </span>
            </IconContext.Provider>
            <p className="tituloNav">David Lezcano</p>
            </section>
            <section className="burguerMenuButton">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </section>
            </nav>
        </>
    )
}

export default Navbar;
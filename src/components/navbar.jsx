import React, { useState, useEffect } from 'react'
import Sidebar from "./sidebar";

const Navbar = () => {
    const [ show, setShow ] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <nav>
            {show ? <Sidebar show={handleShow}/> : null }
            <div className="hamburger" onClick={handleShow}>
                <div className="stick stick-1"></div>
                <div className="stick stick-2"></div>
                <div className="stick stick-3"></div>
            </div>

            <h2>
                Korona Ruletka!
            </h2>
        </nav>
    )
}

export default Navbar
import React, { useState } from 'react'
import Sidebar from "../sidebar";
import { Title } from "./styles"

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
            <Title>Korona Ruletka!</Title>
        </nav>
    )
}

export default Navbar
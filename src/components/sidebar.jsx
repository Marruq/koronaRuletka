import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className="sidebar" onClick={props.show} >
            <ul>
                <li><Link to="/koronaRuletka/home">Home</Link></li>
                <li><Link to="/koronaRuletka/ruletka">Ruletka</Link></li>
                <li><Link to="/koronaRuletka/twitter">Twitter</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
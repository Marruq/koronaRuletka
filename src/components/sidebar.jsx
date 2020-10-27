import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className="sidebar" onClick={props.show} >
            <ul>
                <li><Link to="/ruletka">Ruletka</Link></li>
                <li><Link to="/twitter">Twitter</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
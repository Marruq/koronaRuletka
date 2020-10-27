import React from 'react'
import { Link } from "react-router-dom";
import crown from "../images/crown.svg"

const Home = () => {
    return(
        <div className="home">

            <img src={crown} alt=""/>
            <ul>
                <li><Link to="/koronaRuletka/ruletka">Ruletka</Link></li>
                <li><Link to="/koronaRuletka/twitter">Twitter</Link></li>
            </ul>
        </div>
    )
}

export default Home
import React from 'react'
import { Link } from "react-router-dom";
import crown from "../../images/crown.svg"


const Home = () => {
    return(
        <div className="home">

            <img src={crown} alt=""/>
            <div className="flex">
                <div className="card ">
                    <Link className="ruletka" to="/ruletka">Ruletka</Link>
                </div>
                <div className="card ">
                    <Link className="tt" to="/twitter">Twitter</Link>
                </div>
                <div className="card">
                    <Link className="podkarpacie" to="/podkarpacie">Podkarpacie</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
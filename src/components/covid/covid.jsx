import React from 'react'
import wirus from '../../images/virus.svg'

const Covid = () => {

    return (
        <main>
            <div className="covid">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <title>virus</title>
                    <g id="virus">
                        <path id="virus-outer" className="cls-1"
                              d="M83.5,48H80.75c-16.25-5-6.28-15.61-6.28-15.61L77,29.87a4.5,4.5,0,0,0-6.36-6.36L68.15,26C54.3,34,52,19.21,52,19.21V15.5a4.5,4.5,0,0,0-9,0v3.71c-2,15.21-15.42,6.5-15.42,6.5l-2.21-2.2A4.5,4.5,0,1,0,19,29.87l2.25,2.25C30.51,44.24,15,48,15,48H10.5a4.5,4.5,0,0,0,0,9H15c15,1,6.8,15.34,6.8,15.34L19,75.13a4.5,4.5,0,1,0,6.36,6.36l4.42-4.41C42.08,71.29,43,84.67,43,84.67V88.5a4.5,4.5,0,0,0,9,0V85c4-17,15.67-6.46,15.67-6.46l3,3A4.5,4.5,0,1,0,77,75.13l-3-3C66,57.22,80.75,57,80.75,57H83.5a4.5,4.5,0,0,0,0-9ZM55,64a4,4,0,1,1,4-4A4,4,0,0,1,55,64Z"/>
                    </g>
                    <g id="virus-2" data-name="virus">
                        <circle id="virus-inner" className="cls-2" cx="42.5" cy="47.5" r="7.5"/>
                    </g>
                </svg>

                <a href="https://docs.google.com/spreadsheets/u/1/d/1ierEhD6gcq51HAm433knjnVwey4ZE5DCnu1bW7PRG3E/htmlview?pru=AAABdcIi8j4*ns45Yi5OcnzEip4-Q5vRiQ#gid=1309014089"
                   target="_blank" rel="noreferrer">COVID-19 w Polsce</a>
                <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noreferrer">COVID-19 Coronavirus Pandemic</a>
            </div>
        </main>


    )
}

export default Covid
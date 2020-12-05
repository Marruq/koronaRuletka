import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Score, InfoModal } from './styles'

import sound from '../../images/copySound.mp3'

const Roulette = () => {

    const [ min, setMin ] = useState(null)
    const [ max, setMax ] = useState(null)
    const [ copy, setCopy ] = useState(false)

    const [ result, setResult ] = useState('')
    const [ip, setIp] = useState(null)

    useEffect(() => {
        axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=87bb6d2658f54ff9b543d5d1f70e4735')
            .then(res => {
                setIp(res.data);
            })
    },[])

    const minHandler = e => {
        setMin(e.target.value)
    }

    const maxHandler = e => {
        setMax(e.target.value)
    }

    const roulette = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        setResult((Math.floor(Math.random() * (max - min + 1)) + min))
    }


    const handleResult = () => {
        roulette(min,max)
        data()
    }

    const clipboardHandler = () => {

        const song = new Audio();
        song.src = sound

        if (result) {
            song.play();
            navigator.clipboard.writeText(result)
            setCopy(true)
            setTimeout(()=> {
                setCopy(false)
            },2300)
        } else {
            console.log('brak wyniku')
        }
    }

    const data = () => {
        axios.post('https://koronaruletka-default-rtdb.firebaseio.com/users.json', ip)
            .catch(err => (console.log(err)))
    }

    return (
        <main>

            <div className="roulette">
                <InfoModal copy={copy}>
                    <div>
                        <span>
                            <p>{result} &#128514;</p>
                            <h2>SKOPIOWANO!</h2>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <title>copy</title>
                            <g id="paper-secondary">
                                <path id="paper-black" className="cls-1"
                                      d="M74.5,5H41.69A7.71,7.71,0,0,0,34,12.69V70.31A7.71,7.71,0,0,0,41.69,78H82.31A7.71,7.71,0,0,0,90,70.31V20Z"/>
                            </g>
                            <g id="paper-primary">
                                <g id="paper-white">
                                    <polygon className="cls-2" points="74.5 5 72 5 72 22 90 22 90 19.96 74.5 5"/>
                                    <path className="cls-2"
                                          d="M28,76.06V21H16.94A6,6,0,0,0,11,26.94V88.06A6,6,0,0,0,16.94,94H61.06A6,6,0,0,0,67,88.06V82H33.94A6,6,0,0,1,28,76.06Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </InfoModal>
               <Score onClick={clipboardHandler} result={result} copy={copy} >{result ? result : 'wpisz min, max i kliknij losuj :P'}</Score>

                <input type="number" id="min" placeholder="min" onChange={ e => minHandler(e)}/>
                <input type="number" id="max" placeholder="max" onChange={ e => maxHandler(e)}/>

                <button onClick={handleResult}>LOSUJ</button>
            </div>
        </main>
    )
}

export default Roulette
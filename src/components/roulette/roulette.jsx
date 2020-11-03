import React, { useState } from 'react'

import { Score } from './styles'


const Roulette = () => {

    const [ min, setMin ] = useState(null)
    const [ max, setMax ] = useState(null)

    const [ result, setResult ] = useState('')

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

    return (
        <div className="roulette">
           <Score result={result} >{result ? result : 'wpisz min, max i kliknij losuj :P'}</Score>

            <input type="number" id="min" placeholder="min" onChange={ e => minHandler(e)}/>
            <input type="number" id="max" placeholder="max" onChange={ e => maxHandler(e)}/>

            <button onClick={ () => {
                roulette(min,max)
            }}>LOSUJ</button>

        </div>
    )
}

export default Roulette
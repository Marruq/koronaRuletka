import React, { useState } from 'react'




const Roulette = () => {

    const [ min, setMin ] = useState(null)
    const [ max, setMax ] = useState(null)

    const [ result, setResult ] = useState('')

    const minHandler = e => {
        setMin(e.target.value)
        console.log('min =>' + min)
    }

    const maxHandler = e => {
        setMax(e.target.value)
        console.log('max =>' + max)
    }

    const roulette = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        setResult((Math.floor(Math.random() * (max - min + 1)) + min))
    }






    return (
        <div className="roulette">
           <h1>{result ? result : 'wpisz min, max i kliknij losuj :P'}</h1>

            <input type="number" id="min" placeholder="min" onChange={ e => minHandler(e)}/>
            <input type="number" id="max" placeholder="max" onChange={ e => maxHandler(e)}/>

            <button onClick={ () => {
                roulette(min,max)
            }}>LOSUJ</button>

        </div>
    )
}

export default Roulette
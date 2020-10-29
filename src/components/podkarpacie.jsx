import React, { useEffect } from 'react'

const Podkarpacie = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    },[])

    return (
        <div className="twitter pdk">
            <h4>Nie dało się wyciągnąć jego odpowiedzi, to masz przynajmniej na niego namiar</h4>

            <a className="twitter-timeline" data-lang="pl" data-width="500" data-height="600" data-theme="dark"
               href="https://twitter.com/McMarcel83?ref_src=twsrc%5Etfw">Tweety gościa od podkarpacia</a>
        </div>
    )
}

export default Podkarpacie
import React, { useEffect } from 'react'

const TwitterFeed = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    },[])

    return (
        <div className="twitter">
            <a className="twitter-timeline" data-lang="pl" data-width="500" data-height="600" data-theme="dark"
               href="https://twitter.com/MZ_GOV_PL?ref_src=twsrc%5Etfw">Tweets by MZ_GOV_PL</a>
        </div>
    )
}

export default TwitterFeed
import React, {useState, useEffect} from 'react'
import { Button } from "../utilities/utilities";

const TwitterFeed = () => {

    const [ isMobile, setIsMobile ] = useState(false)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.id = "tt";
        document.body.appendChild(script);
        const widget = document.querySelector('#tt')
        return () => {
            document.body.removeChild(widget)
        }

    },[isMobile])

    const mobileHandler = () => {
        setIsMobile(!isMobile)
    }

    return (
        <main>
            <Button click={mobileHandler} text={'Przełącz'}/>

            {!isMobile &&
                <div className="twitter">
                    <a className="twitter-timeline" data-lang="pl" data-width="500" data-height="600" data-theme="dark"
                    href="https://twitter.com/MZ_GOV_PL?ref_src=twsrc%5Etfw">Tweets by MZ_GOV_PL</a>
                </div>
            }
            {isMobile &&
                <div className="twitter pdk">
                    <a className="twitter-timeline" data-lang="pl" data-width="500" data-height="600" data-theme="dark"
                   href="https://twitter.com/McMarcel83?ref_src=twsrc%5Etfw">Tweety gościa od podkarpacia</a>
                </div>
            }
        </main>
    )
}

export default TwitterFeed
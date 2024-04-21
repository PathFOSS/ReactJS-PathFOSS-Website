import Navbar from "./Navbar";
import Hand from "../images/hand.png";
import HandSmall from "../images/hand-small.png";
import { useState } from "react";

const Banner = () => {

    const [image, setImage] = useState(false);
    const styleDict = {
        true: "",
        false: "gone"
    }

    return <div id="banner">
        <Navbar/>
        <div id="banner-container">
            <div id="banner-content">
                <p>Free and Open Source</p>
                <h1>Coding for positive impact</h1>
                <p>Sensible solutions for self-improvement and finance</p>
            </div>
            
            <div id="banner-image" className={styleDict[!image]}>
                <img src={HandSmall} alt="hand"/>
            </div>

            <div id="banner-image" className={styleDict[image]}>
                <img src={Hand} onLoad={() => setImage(true)} alt="preload-hand"/>
            </div>
        </div>

    </div>
}
export default Banner;
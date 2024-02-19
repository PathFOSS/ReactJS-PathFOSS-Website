import Navbar from "./Navbar";
import Background from "./images/background.jpg";
import Hand from "./images/hand.png";

const Banner = () => {
    return <div id="banner" style={{backgroundImage: `url(${Background}`}}>
        <Navbar/>
        <div id="banner-container">
            <div id="banner-content">
                <p>Free and Open Source</p>
                <h1>Coding for positive impact</h1>
                <p>App-centered solutions for physical and mental health</p>
            </div>
            <div id="banner-image">
                <img src={Hand}/>
            </div>
        </div>

    </div>
}
export default Banner;
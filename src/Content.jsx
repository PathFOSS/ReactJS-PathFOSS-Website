import VideoSection from "./VideoSection";
import CryptoTrackerVideo from "./videos/cryptotracker_trailer.mp4";
import VivoxiaVideo from "./videos/vivoxia_trailer.mp4";
import DullPhoneVideo from "./videos/dullphone_trailer.mp4";
import TripleSection from "./TripleSection";
import LogoSection from "./LogoSection";
import AboutSection from "./AboutSection";

const Content = () => {
    return <div>
        <h2>Projects</h2>
        <p className="italic-text">Made for you with passion and perseverance</p>

        <VideoSection 
            title="CryptoTracker"
            video="https://invidious.privacyredirect.com/watch?v=RUwTvCyeohQ"
            textfirst={false}
            github="https://github.com/PathFOSS/CryptoTracker"
            website="https://crypto.pathfoss.com"
            languages="React, Node, Express, MySQL"
            text="CryptoTracker is a private and minimalist cryptocurrency price and chart viewer app on the internet. Using CoinMarketCap data strategically, it achieves lightning fast loading speeds of up to 75% faster than CoinMarketCap itself. It is possible to set a custom background data refresh rate and search for over 9,000 coins."
        />

        <VideoSection 
            title="Vivoxia"
            video={VivoxiaVideo}
            textfirst={true}
            github="https://github.com/PathFOSS/Vivoxia"
            download="https://github.com/PathFOSS/Vivoxia/releases/download/v1.1.0/Vivoxia-1.1.0.apk"
            languages="Java, SQLite"
            text="Vivoxia is an all-in-one application for a fitness enthusiast, featuring journals, goal settings, workout timer, and more. This app is minimal with under 10 MB of storage required to begin. There is zero tracking or analytics and everything you do is saved offline. The app supports all units and can be configured with both imperial and metric units."
        />

        <VideoSection 
            title="Dull Phone"
            video={DullPhoneVideo}
            textfirst={false}
            github="https://github.com/PathFOSS/DullPhone"
            download="https://github.com/PathFOSS/DullPhone/releases/download/v2.3.0/DullPhone-2.3.0.apk"
            languages="Java"
            text="Dull Phone is the self-control block timer that every digital native desperately needs to stop the mindless checking and scrolling on the phone. The app is a foreground overlay that disallows the use of all apps except those specified in the user whitelist. It can be only stopped by the timer or the configurable tap-to-unlock functionality."
        />
        
        <TripleSection/>
        <AboutSection/>
        <LogoSection/>
    </div>
}
export default Content;
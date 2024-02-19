import VideoSection from "./VideoSection";
import VivoxiaVideo from "./videos/vivoxia_trailer.mp4";
import VivoxiaThumbnail from "./images/vivoxia-logo.svg";
import DullPhoneVideo from "./videos/dullphone_trailer.mp4";
import DullPhoneThumbnail from "./images/dullphone_logo.svg";
import TripleSection from "./TripleSection";
import LogoSection from "./LogoSection";

const Content = () => {
    return <div>
        <h2>Projects</h2>
        <p className="italic-text">Made for you with passion and perseverance</p>
        <VideoSection 
            title="Vivoxia"
            video={VivoxiaVideo}
            thumbnail={VivoxiaThumbnail}
            textfirst={true}
            github="https://github.com/PathFOSS/Vivoxia"
            download="https://github.com/PathFOSS/Vivoxia/releases/download/v1.1.0/Vivoxia-1.1.0.apk"
            text="Vivoxia is an all-in-one application for a fitness enthusiast, featuring journals, goal settings, workout timer, and more. This app is minimal with under 10 MB of storage required to begin. There is zero tracking or analytics and everything you do is saved offline. The app supports all units and can be configured with both imperial and metric units."
        />
        <VideoSection 
            title="Dull Phone"
            video={DullPhoneVideo}
            thumbnail={DullPhoneThumbnail}
            textfirst={false}
            github="https://github.com/PathFOSS/DullPhone"
            download="https://github.com/PathFOSS/DullPhone/releases/download/v2.3.0/DullPhone-2.3.0.apk"
            text="Dull Phone is the self-control block timer that every digital native desperately needs to stop the mindless checking and scrolling on the phone. The app is a foreground overlay that disallows the use of all apps except those specified in the user whitelist. It can be only stopped by the timer or the configurable tap-to-unlock functionality."
        />
        <TripleSection/>
        <LogoSection/>
    </div>
}
export default Content;
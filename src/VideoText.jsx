import GitHubLogo from "./images/github-logo.svg";
import AndroidLogo from "./images/android-logo.svg";
import GlobeIcon from "./images/globe.svg";
import ChevronIcon from "./images/chevron-right.svg";

const VideoText = (props) => {
    return <div className="video-section-text">
        <div>
            <h3 id={`${props.title}`.toLowerCase()}>{props.title}</h3>
            <p className="paragraph">{props.text}</p>
            <div className="iconized-text italic-text">
                <img src={ChevronIcon}/>
                <p>{props.languages}</p>
            </div>
            <div className="cta-buttons">
                <a href={props.github}>
                    <button>GitHub<img src={GitHubLogo}/></button>
                </a>
                <a href={props.download ? props.download : props.website}>
                    <button>{props.download ? "Download APK" : "Visit Site"}<img src={props.download ? AndroidLogo : GlobeIcon}/></button>
                </a>
            </div>
        </div>
    </div>
}
export default VideoText;
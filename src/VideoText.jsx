import GitHubLogo from "./images/github-logo.svg";
import AndroidLogo from "./images/android-logo.svg";

const VideoText = (props) => {
    return <div className="video-section-text">
        <div>
            <h3>{props.title}</h3>
            <p className="paragraph">{props.text}</p>
            <div className="cta-buttons">
                <a href={props.github}>
                    <button>GitHub<img src={GitHubLogo}/></button>
                </a>
                <a href={props.download}>
                    <button>Download APK<img src={AndroidLogo}/></button>
                </a>
            </div>
        </div>
    </div>
}
export default VideoText;
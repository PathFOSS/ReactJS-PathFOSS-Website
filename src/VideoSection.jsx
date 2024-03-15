import VideoPlayer from "./VideoPlayer";
import VideoText from "./VideoText";

const VideoSection = (props) => {
    return <section>
        {props.textfirst ? 
            (<div className="video-section video-section-right">
                <VideoText github={props.github} download={props.download} website={props.website} title={props.title} text={props.text}/>
                <VideoPlayer video={props.video}/>
            </div>) : 
            (<div className="video-section video-section-left">
                <VideoPlayer video={props.video}/>
                <VideoText github={props.github} download={props.download} website={props.website} title={props.title} text={props.text}/>
            </div>)
        }
    </section>
}
export default VideoSection;
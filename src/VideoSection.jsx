import VideoPlayer from "./VideoPlayer";
import VideoText from "./VideoText";

const VideoSection = (props) => {
    return <section>
        {props.textfirst ? 
            (<div className="video-section video-section-right">
                <VideoText github={props.github} download={props.download} title={props.title} text={props.text}/>
                <VideoPlayer thumbnail={props.thumbnail} video={props.video}/>
            </div>) : 
            (<div className="video-section video-section-left">
                <VideoPlayer thumbnail={props.thumbnail} video={props.video}/>
                <VideoText github={props.github} download={props.download} title={props.title} text={props.text}/>
            </div>)
        }
    </section>
}
export default VideoSection;
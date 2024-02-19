import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
    return <div className="video-section-video">
        <ReactPlayer className="react-player" controls={true} light={props.thumbnail} style={{borderRadius: "0.5rem", overflow: "hidden"}} url={props.video}/>
    </div>
}
export default VideoPlayer;
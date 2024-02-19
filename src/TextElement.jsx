const TextElement = (props) => {
    return <div>
        <div className="icon-container">
            <img src={props.image}/>
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
}
export default TextElement;
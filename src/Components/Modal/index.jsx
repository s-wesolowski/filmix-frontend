import "./Modal.scss";

const Modal = props => {
    console.log(props);

    return (
    <div className="Modal">
        <div className="overlay" onClick={props.close}></div>
        {props.backgroundImage && <div className="backgroundImage"><img src={props.backgroundImage} alt="poster_bg_img" /></div> }
        <div className="content">
            <div className="header">
                <div className="title">{props.title || "Title"}</div>
                <button className="close" onClick={props.close}></button>
            </div>
            {props.children}
        </div>
    </div>
    )
}

export default Modal;
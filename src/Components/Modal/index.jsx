import "./Modal.scss";

const Modal = props => {
    console.log(props);

    return (
    <div className="modal">
        <div className="background" onClick={props.close}></div>
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
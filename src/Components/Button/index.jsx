import "./Button.scss";

const Button = (props) => {
    return <button className="Button" style={props.transparent && {backgroundColor: "transparent"}} onClick={props.onClick}>{props.children}</button>
}

export default Button;
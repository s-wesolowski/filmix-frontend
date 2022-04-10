import "./Button.scss"

const Button = props => {
    return <button className="Button" onClick={props.onClick}>{props.placeholder}</button>
}

export default Button;
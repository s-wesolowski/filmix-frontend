import "./Input.scss";
import InputText from "./InputText";

const Input = props => {
    switch(props.type) {
        case "text":
            return <InputText {...props}/>;
        default:
            return <InputText {...props}/>;
    }
}

export default Input;
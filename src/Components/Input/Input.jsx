import "./Input.scss";
import InputCheckbox from "./InputCheckbox";
import InputText from "./InputText";

const Input = (props) => {
  switch (props.type) {
    case "text":
    case "password":
    case "email":
      return <InputText {...props} />;
    case "checkbox":
      return <InputCheckbox {...props} />;
    default:
      return <InputText {...props} />;
  }
};

export default Input;

import "./InputCheckbox.scss";
import { useState } from "react";

const InputCheckbox = props => {

    const [checked, setChecked] = useState(true)

    const handleChange = () => {
        props.onChange(props.name, !checked)
        setChecked(!checked);
    }

    return (
    <label className="Input Input-checkbox">
        <input type="checkbox" placeholder=" " name={props.name} onChange={handleChange}></input>
        <span className="checkmark"></span>
        <span>{props.placeholder}</span>
    </label>
    )
}

export default InputCheckbox;
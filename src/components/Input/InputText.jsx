const InputText = props => {
    return (
    <label className="Input Input-text">
        <input type="text" placeholder="." name={props.name} onChange={props.onChange}></input>
        <span>{props.placeholder}</span>
    </label>
    )
}

export default InputText;
const InputText = props => {

    const handleChange = e => {
        props.onChange(e.target.name, e.target.value)
    }

    return (
    <label className="Input Input-text">
        <input type="text" placeholder=" " name={props.name} onChange={handleChange}></input>
        <span>{props.placeholder}</span>
    </label>
    )
}

export default InputText;
const InputText = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return (
    <label className="Input Input-text">
      <input
        placeholder=" "
        type={props.type}
        name={props.name}
        onChange={props.onChange ? handleChange : null}
        minLength={props.minLength || 0}
      ></input>
      <span>{props.placeholder}</span>
    </label>
  );
};

export default InputText;

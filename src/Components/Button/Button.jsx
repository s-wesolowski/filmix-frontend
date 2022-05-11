import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className="Button"
      style={props.transparent && { backgroundColor: "transparent" }}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;

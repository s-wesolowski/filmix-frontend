import "./Button.scss";

const Button = ({ transparent, onClick, type = "button", children }) => {
  return (
    <button
      className="Button"
      style={transparent ? { backgroundColor: "transparent" } : {}}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

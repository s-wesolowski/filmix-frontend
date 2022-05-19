import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Login = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const remember_me = e.target[2].checked;

    const token = await axios
      .post("http://localhost:8000/api/token/", {
        username,
        password,
      })
      .then((res) => res.data);

    if (token && token.access)
      dispatch({
        type: "SET_USERDATA",
        user: jwtDecode(token.access),
      });

    sessionStorage.setItem("access", token.access);
    sessionStorage.setItem("refresh", token.refresh);
    if (remember_me) {
      localStorage.setItem("access", token.access);
      localStorage.setItem("refresh", token.refresh);
    }

    props.close();
  };
  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" name="username" />
      <Input type="password" placeholder="Password" name="password" />
      <Input type="checkbox" placeholder="Remember me" name="remember_me" />
      <Button type="submit">Sign in</Button>
      <Button type="button" transparent>
        Forgot password?
      </Button>
      <Button type="button" onClick={props.showRegister} transparent>
        Don't have an account? Sign up now!
      </Button>
    </form>
  );
};

export default Login;

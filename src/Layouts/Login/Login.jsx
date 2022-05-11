import "./Login.scss";
import { useState } from "react";
import Modal from "../../Components/Modal";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

const Login = (props) => {
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const handleInputChange = (name, value) => {
    setUserCredentials({ ...userCredentials, [name]: value });
    console.log(userCredentials);
  };

  const backgroundImage =
    "https://static.posters.cz/image/1300/plakaty/avengers-endgame-journey-s-end-i122136.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const remember_me = e.target[2].checked;

    const token = await axios
      .post("http://localhost:8000/api/token/", {
        username: email,
        password: password,
      })
      .then((res) => res.data);

    if (token && token.access) {
      dispatch({
        type: "SET_USERDATA",
        user: jwt_decode(token.access),
      });
    }

    sessionStorage.setItem("access", token.access);
    sessionStorage.setItem("refresh", token.refresh);
    if (remember_me) {
      localStorage.setItem("access", token.access);
      localStorage.setItem("refresh", token.refresh);
    }

    props.close();
  };

  return (
    props.show && (
      <Modal
        close={props.close}
        title="Sign in"
        backgroundImage={backgroundImage}
      >
        <form className="login" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="E-mail address"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
          />
          <Input
            type="checkbox"
            placeholder="Remember me"
            name="remember_me"
            onChange={handleInputChange}
          />
          <Button type="submit">Sign in</Button>
          <Button type="button" transparent>
            Forgot passowrd?
          </Button>
          <Button type="button" transparent>
            Don't have an account? Sign up now!
          </Button>
        </form>
      </Modal>
    )
  );
};

export default Login;

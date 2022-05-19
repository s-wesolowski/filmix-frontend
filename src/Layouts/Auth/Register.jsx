import Input from "../../Components/Input";
import Button from "../../Components/Button";
import axios from "axios";
import { toast as setNotification } from "react-toastify";

const Register = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const password_check = e.target[3].value;

    const registerResponse = await axios
      .post("http://localhost:8000/api/register/", {
        email,
        username,
        password,
        password_check,
      })
      .then((res) => res.data);

    if (registerResponse && registerResponse.success) {
      setNotification("Signed up successfully");
      props.showLogin();
    } else {
      setNotification("Internal error! Try again later");
    }

    props.close();
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" name="username" />
      <Input type="email" placeholder="E-mail address" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <Input
        type="password"
        placeholder="Repeat password"
        name="password_check"
      />
      <Button type="submit">Sign up</Button>
      <Button type="button" onClick={props.showLogin} transparent>
        Already have an account? Sign in!
      </Button>
    </form>
  );
};

export default Register;

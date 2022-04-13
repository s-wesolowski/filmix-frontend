import "./Login.scss";
import { useState } from "react";
import Modal from "../../componentss/Modal";
import Input from "../../componentss/Input";
import Button from "../../componentss/Button";

const Login = (props) => {

    const [userCredentials, setUserCredentials] = useState({
        email: "", password: "", remember_me: false
    })

    const handleInputChange = (name, value) => {
        setUserCredentials({...userCredentials, [name]: value})
        console.log(userCredentials)
    }

    const backgroundImage = "https://static.posters.cz/image/1300/plakaty/avengers-endgame-journey-s-end-i122136.jpg";

    const handleSubmitSingIn = () => {

    }
 
    return props.show && 
    <Modal close={props.close} title="Sign in" backgroundImage={backgroundImage}>
        <form className="login">
            <Input type="text" placeholder="E-mail address" name="email" onChange={handleInputChange}/>
            <Input type="text" placeholder="Password" name="password" onChange={handleInputChange}/>
            <Input type="checkbox" placeholder="Remember me" name="remember_me" onChange={handleInputChange}/>
            <Button onClick={handleSubmitSingIn}>Sign in</Button>
            <Button transparent>Forgot passowrd?</Button>
            <Button transparent>Don't have an account? Sign up now!</Button>
        </form>
    </Modal>
}

export default Login;
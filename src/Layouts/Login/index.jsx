import "./Login.scss";
<<<<<<< HEAD:src/Layouts/Navbar/Login/index.jsx
import { useState } from "react";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
=======
import { useState } from 'react';
import Modal from '../../Components/Modal'
import Input from "../../Components/Input"
import Button from "../../Components/Button"
>>>>>>> c4d78b31ac1fa3f02588a052f99ae7cbfe5eb3e1:src/Layouts/Login/index.jsx

const Login = (props) => {

    const [userCredentials, setUserCredentials] = useState({
        email: "", password: "", remember_me: false
    })

    const handleInputChange = (name, value) => {
        setUserCredentials({...userCredentials, [name]: value})
        console.log(userCredentials)
    }

<<<<<<< HEAD:src/Layouts/Navbar/Login/index.jsx
    const handleSubmitSingIn = () => {

    }

=======
    const backgroundImage = "https://static.posters.cz/image/1300/plakaty/avengers-endgame-journey-s-end-i122136.jpg";

    const handleSubmitLogin = () => {

    }
 
>>>>>>> c4d78b31ac1fa3f02588a052f99ae7cbfe5eb3e1:src/Layouts/Login/index.jsx
    return props.show && 
    <Modal close={props.close} title="Sign in" backgroundImage={backgroundImage}>
        <form className="login">
            <Input type="text" placeholder="E-mail address" name="email" onChange={handleInputChange}/>
            <Input type="text" placeholder="Password" name="password" onChange={handleInputChange}/>
            <Input type="checkbox" placeholder="Remember me" name="remember_me" onChange={handleInputChange}/>
<<<<<<< HEAD:src/Layouts/Navbar/Login/index.jsx
            <Button onClick={handleSubmitSingIn}>Sign in</Button>
            <Button transparent>Forgot passowrd?</Button>
            <Button transparent>Don't have an account? Sign up now!</Button>
        </div>
=======
            <Button onClick={handleSubmitLogin} placeholder="Sign in"/>
        </form>
>>>>>>> c4d78b31ac1fa3f02588a052f99ae7cbfe5eb3e1:src/Layouts/Login/index.jsx
    </Modal>
}

export default Login;
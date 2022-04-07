import "./Login.scss";
import { useState } from 'react';
import Modal from '../../../components/Modal'
import Input from "../../../components/Input"

const Login = (props) => {

    const [userCredentials, setUserCredentials] = useState({
        email: "", password: "", remember_me: false
    })

    const handleInputChange = (name, value) => {
        setUserCredentials({...userCredentials, [name]: value})
        console.log(userCredentials)
    }

    return props.show && 
    <Modal close={props.close} title="Sign in">
        <div className="login">
            <Input type="text" placeholder="E-mail address" name="email" onChange={handleInputChange}/>
            <Input type="text" placeholder="Password" name="password" onChange={handleInputChange}/>
            <Input type="checkbox" placeholder="Remember me" name="remember_me" onChange={handleInputChange}/>
        </div>
    </Modal>
}

export default Login;
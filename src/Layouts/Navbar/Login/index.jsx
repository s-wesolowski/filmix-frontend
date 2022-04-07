import "./Login.scss";
import { useState } from 'react';
import Modal from '../../../components/Modal'
import Input from "../../../components/Input"

const Login = (props) => {

    const [userCredentials, setUserCredentials] = useState({email: "", password: ""})

    const handleInputChange = value => {
        setUserCredentials({...userCredentials, [value.target.name]: value.target.value})
        console.log(userCredentials)
    }

    return props.show && 
    <Modal close={props.close} title="Sign in">
        <div className="login">
            <Input type="text" placeholder="E-mail address" name="email" onChange={handleInputChange}/>
            <Input type="text" placeholder="Password" name="password" onChange={handleInputChange}/>
        </div>
    </Modal>
}

export default Login;
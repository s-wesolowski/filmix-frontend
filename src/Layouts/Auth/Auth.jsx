import "./Auth.scss";
import { useState } from "react";
import Modal from "../../Components/Modal";
import Login from "./Login";
import Register from "./Register";

const Auth = (props) => {
  const backgroundImage =
    "https://static.posters.cz/image/1300/plakaty/avengers-endgame-journey-s-end-i122136.jpg";

  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
  };

  const handleClose = () => {
    props.close();
    setShowLogin(true);
  };

  return (
    props.show && (
      <Modal
        close={handleClose}
        title={showLogin ? "Sign in" : "Sign up"}
        backgroundImage={backgroundImage}
        animateOnChange
      >
        {showLogin && (
          <Login showRegister={handleShowRegister} close={handleClose} />
        )}
        {!showLogin && (
          <Register showLogin={handleShowLogin} close={handleClose} />
        )}
      </Modal>
    )
  );
};

export default Auth;

import { useSelector } from "react-redux";
import { toast as setNotification } from "react-toastify";

const Home = () => {
  const userData = useSelector((state) => state.userData);

  const handleClick = () => {
    setNotification.error("test");
  };

  return (
    <>
      {userData.user ? "Hi " + userData.user.username + "!" : "Sing in!"}
      <button onClick={handleClick}>Noti</button>
    </>
  );
};

export default Home;

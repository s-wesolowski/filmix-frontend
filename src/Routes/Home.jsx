import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state.userData);

  return userData.user ? "Hi " + userData.user.username + "!" : "Sing in!";
};

export default Home;

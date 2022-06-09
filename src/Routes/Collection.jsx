import { useSelector } from "react-redux";
import Poster from "../Components/Poster";

const Home = () => {
  const { user } = useSelector((state) => state.userData);
  const { collection } = useSelector((state) => state.collection);

  return (
    <>
      {user ? (
        <>
          <h1>Your collection</h1>
          {console.log(collection[user.user_id])}
          {((user.user_id && collection[user.user_id]) || []).map((item, i) => (
            <Poster key={i} size="normal" media={item.data} margin="10px" />
          ))}
        </>
      ) : (
        <h2>Log in!</h2>
      )}
    </>
  );
};

export default Home;

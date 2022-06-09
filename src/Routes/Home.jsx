import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Poster from "../Components/Poster";
import axios from "axios";

const Home = () => {
  const { user } = useSelector((state) => state.userData);
  const { collection } = useSelector((state) => state.collection);

  const [movies, setMovies] = useState([]);
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const lastMovieFromCollection = (
        (user &&
          user.user_id &&
          collection[user.user_id] &&
          collection[user.user_id]) ||
        []
      )
        .reverse()
        .filter((item) => item.type === "movie");

      let tmdb_response = {};

      if (user && user.user_id && lastMovieFromCollection.length > 0) {
        tmdb_response = await axios.get(
          `https://api.themoviedb.org/3/movie/${lastMovieFromCollection[0].data.id}/recommendations?api_key=` +
            apiKey
        );
      } else {
        tmdb_response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey
        );
      }

      const tmdb_movies = await tmdb_response.data;

      if (tmdb_movies) setMovies(tmdb_movies.results);
    };

    fetchMovies();
  }, [apiKey, collection, user]);

  return (
    <>
      {user ? <h1>Welcome back!</h1> : <h1>Sing in!</h1>}
      {user ? <h2>Recommended movies</h2> : <h2>Popular movies</h2>}
      {movies.map((movie, i) => (
        <Poster key={i} size="normal" media={movie} margin="10px" />
      ))}
    </>
  );
};

export default Home;

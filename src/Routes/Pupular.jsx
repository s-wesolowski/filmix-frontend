import { useEffect, useState } from "react";
import Poster from "../componentss/Poster";
import "./Popular.scss"
import axios from "axios";

const Popular = () => {

    const [movies, setMovies] = useState([])
    const apiKey =  process.env.REACT_APP_TMDB_API_KEY;



    useEffect(()=>{
        const fetchMovies = async () => {
            const tmdb_response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey)
            const tmdb_movies = await tmdb_response.data

            console.log(tmdb_response)
            
            if (tmdb_movies)
                setMovies(tmdb_movies.results)
        }

        fetchMovies()
    },[apiKey])


    return (
        <div className="popular">
            <h2>Popular 2022</h2>
            {
                movies.map((movie, i) => 
                    <Poster key={i} size="normal" media={movie} margin="10px"/>
                )
            }
        </div>
    )
}

export default Popular;
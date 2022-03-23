import { useEffect, useState } from "react";
import Poster from "../components/Poster/Poster";
import "./Popular.scss"

const Popular = () => {

    const [movies, setMovies] = useState([])
    const apiKey =  process.env.REACT_APP_TMDB_API_KEY;

    useEffect(()=>{
        const fetchMovies = async () => {
            const tmdb_response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey)
            const tmdb_movies = await tmdb_response.json()
            
            if (movies)
                setMovies(tmdb_movies.results)
        }
        fetchMovies()
    },[apiKey, movies])

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
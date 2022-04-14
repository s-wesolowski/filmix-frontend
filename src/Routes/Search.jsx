import axios from "axios";
import { useState } from "react";
import Poster from "../Components/Poster";
import "./Search.scss";

const Search = () => {

    const [results, setResults] = useState([])
    const apiKey =  process.env.REACT_APP_TMDB_API_KEY;


    const findMovies = async (title) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${title}&api_key=${apiKey}`);
        let results = await response.data;

        results = results?.results?.filter(result => result.poster_path && (result.name || result.title))

        if (results) setResults(results)
    }

    const handleInputChange = e => {
        findMovies(e.target.value);
    }

    return(
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder="Search movie" onChange={handleInputChange}/>
            </div>
            <div className="results">
                {results && results.map((result, i) => 
                    <Poster key={i} media={result} margin="10px"/>
                )}
            </div>
        </div>
    )
}

export default Search;


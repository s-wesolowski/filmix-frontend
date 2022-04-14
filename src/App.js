import './App.scss';
import Sidebar from "./Layouts/Sidebar";
import { Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Popular from './Routes/Pupular';
import Search from './Routes/Search';
import MovieDetails from './Layouts/Details/MovieDetails';
import TvSeriesDetails from './Layouts/Details/TvSeriesDetails';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </main>
      <div style={{clear: "both"}}></div>

      <MovieDetails />
      <TvSeriesDetails />
    </div>
  );
}

export default App;

import './App.scss';
import NavBar from "./Layouts/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Popular from './Routes/Pupular';
import Search from './Routes/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </main>
      <div style={{clear: "both"}}></div>
    </div>
  );
}

export default App;

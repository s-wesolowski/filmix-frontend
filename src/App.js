import './App.scss';
import NavBar from "./Layouts/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Popular from './Routes/Pupular';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />}/>
        </Routes>
      </main>
      <div style={{clear: "both"}}></div>
    </div>
  );
}

export default App;

import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Popular from './routes/Pupular';

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

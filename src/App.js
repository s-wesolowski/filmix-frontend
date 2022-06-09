import "./App.scss";
import Sidebar from "./Layouts/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Popular from "./Routes/Pupular";
import Search from "./Routes/Search";
import MediaDetails from "./Layouts/MediaDetails/MediaDetails";
import Notifications from "./Layouts/Notifications";
import Collection from "./Routes/Collection";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
      <div style={{ clear: "both" }}></div>

      <Notifications />
      <MediaDetails />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Work from "./components/work";
import Agency from "./components/agency";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </Router>
  );
}

export default App;
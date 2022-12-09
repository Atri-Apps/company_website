import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Trial from "./pages/Trial.jsx";
import Showcase from "./pages/Showcase.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/trial" element={<Trial />} />
<Route path="/Showcase" element={<Showcase />} />
    </Routes>
  );
}

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Drive from "./components/Drive";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/profile" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact Card={Card} />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </>
  );
}

export default App;

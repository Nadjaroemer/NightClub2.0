import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";
import logo from "../src/assets/Logo.png";

import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <div className="bg-black text-white font-['Ubuntu']">
      <BrowserRouter>
        <Hero />
        <nav className="bg-black border-y-2 border-[#ff2a70] text-2xl uppercase ">
          <ul className="flex justify-around pl-10 pr-10 mt-10 mb-10">
            <li className="pl-36">
              <img src={logo} alt="Logo" />
            </li>
            <li className="pl-48">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/booking">Book Table</Link>
            </li>
            <li className="pr-36">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>root</div>} />
          <Route path="/about-us" element={<div>About Us</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/events" element={<div>Events</div>} />
          <Route path="/gallery" element={<div>Gallery</div>} />
          <Route path="/booking" element={<div>Book a table</div>} />
          <Route path="/contact-us" element={<div>Contact Us</div>} />
        </Routes>
        <Landingpage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

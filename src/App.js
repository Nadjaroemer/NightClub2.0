import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-red-900">
      <BrowserRouter>
        <Hero />
        <nav className="bg-black">
          <Link to="/">Root</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Book Table</Link>
          <Link to="/contact-us">Contact Us</Link>
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
      </BrowserRouter>
    </div>
  );
}

export default App;

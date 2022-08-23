import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";
import logo from "../src/assets/Logo.png";
import line from "../src/assets/bottom_line2.png";
import restaurantImageTo from "../src/assets/content-img/reastaurant_1.jpg";
import restaurantImageOne from "../src/assets/content-img/thumb1.jpg";
import restaurantImageThree from "../src/assets/content-img/thumb2.jpg";
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
        <div className="grid grid-col-1 grid-row-3 align-center justify-center">
          <h1 className="pt-28 tracking-[0.075em] font-bold uppercase text-center text-4xl">
            Welcome in Night<span className="text-[#ff2a70]">Club</span>
          </h1>
          <img src={line} alt="line" className="pt-8 place-self-center" />
          <div className="flex pt-24">
            <img
              src={restaurantImageOne}
              alt="drinks at table"
              className="pr-16"
            />
            <img src={restaurantImageTo} alt="bruschetta" className="pr-16" />
            <img src={restaurantImageThree} alt="bar" />
          </div>
        </div>

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

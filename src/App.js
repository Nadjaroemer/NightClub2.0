import { useEffect, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import Hero from "./components/Hero";
import "./App.css";
import logo from "../src/assets/Logo.png";
import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";
import MobileMenu from "./components/Mobilemenu";
import Blog from "./pages/Blog";

const SELECTED_BLOG_POST_ID = 3;

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchBlogPosts = () => {
      axios
        .get(`${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts`)
        .then((response) => {
          setBlogPosts(response.data);
        });
    };

    const fetchComments = () => {
      axios
        .get(
          `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts/${SELECTED_BLOG_POST_ID}/comments`
        )
        .then((response) => {
          setComments(response.data);
        });
    };

    fetchBlogPosts();
    fetchComments();
  }, []);

  return (
    <div className="bg-black text-white font-['Ubuntu']">
      <BrowserRouter>
        <Hero />

        {isMobileMenuOpen ? (
          <div className="fixed w-screen h-screen bg-black z-50">
            <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>
        ) : undefined}

        <div>
          {isTabletOrMobile ? (
            <button
              className="pt-4"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  fill-white="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          ) : (
            <div>
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
            </div>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Landingpage blogPosts={blogPosts} />} />
          <Route path="/about-us" element={<div>About Us</div>} />
          <Route
            path="/blog"
            element={
              <Blog
                comments={comments}
                // Optional chaining
                latestBlogPost={blogPosts?.find((blogPost) => {
                  if (blogPost.id === 3) {
                    return true;
                  }
                  return false;
                })}
              />
            }
          />
          <Route path="/events" element={<div>Events</div>} />
          <Route path="/gallery" element={<div>Gallery</div>} />
          <Route path="/booking" element={<div>Book a table</div>} />
          <Route path="/contact-us" element={<div>Contact Us</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

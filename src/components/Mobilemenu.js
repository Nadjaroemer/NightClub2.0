import { Link } from "react-router-dom";

export default function MobileMenu({ setIsMobileMenuOpen }) {
  return (
    <>
      <nav>
        <div>
          <button
            className="pt-4 pl-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col text-center text-4xl gap-3 h-full pt-12">
          <li>
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
        </ul>
      </nav>
    </>
  );
}

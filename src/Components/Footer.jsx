import { Link, useLocation } from "react-router-dom";

import "../assets/css/Footer.css";

export default function Footer() {
  const location = useLocation();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          {location.pathname === "/" && (
            <a href="/#" className="logo-link">
              <span className="logo">pairings</span>
            </a>
          )}
          {location.pathname !== "/" && (
            <Link to="/" className="logo-link">
              <span className="logo">pairings</span>
            </Link>
          )}
        </div>
        <div className="footer-links">
          <ol>
            <li>
              {location.pathname === "/" && (
                <a href="/#" className="home-link">
                  <span className="material-symbols-outlined">vertical_align_top</span> Top
                </a>
              )}
              {location.pathname !== "/" && (
                <Link to="/" className="home-link">
                  Home
                </Link>
              )}
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="footer-bottom italic">
        <p>
          &copy; {new Date().getFullYear()} pairings. All rights reserved. Hero image by{" "}
          <a href="https://www.pexels.com/@fauxels/" target="_blank" rel="noreferrer">
            @fauxels
          </a>{" "}
          from{" "}
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            Pexels
          </a>
          . The testimonials use mock data through and through.
        </p>
      </div>
    </footer>
  );
}

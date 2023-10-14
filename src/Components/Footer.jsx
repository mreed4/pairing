import { Link } from "react-router-dom";

import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <span className="logo">pairings</span>
          </Link>
        </div>
        <div className="footer-links">
          <ol>
            <li>
              <Link to="/">Home</Link>
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

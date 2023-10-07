import { Link } from "react-router-dom";

import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Link to="/">
          <span className="logo">Pairings</span>
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
    </footer>
  );
}
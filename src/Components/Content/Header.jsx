import { Link, useLocation } from "react-router-dom";

import "../../assets/css/Header.css";

import ThemeToggle from "../Content/ThemeToggle";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <h1>Pairings</h1>
      </Link>
      <div>
        <nav>
          <ul>
            {location.pathname === "/" && (
              <>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </>
            )}
            {location.pathname !== "/sign-in" && (
              <li>
                <Link to="/sign-in" className="sign-in-link button pink">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

import { Link, useLocation } from "react-router-dom";

import "../assets/css/Header.css";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const location = useLocation();

  function StartPageGroup() {
    return (
      <>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </>
    );
  }

  function SignIn() {
    return (
      <li>
        <Link to="/sign-in" className="sign-in-link button pink">
          Sign In
        </Link>
      </li>
    );
  }

  return (
    <header>
      <div>
        <Link to="/">
          <h1>Pairings</h1>
        </Link>
        <div>
          <nav>
            <ul className="main-nav">
              {location.pathname === "/" && <StartPageGroup />}
              {location.pathname !== "/sign-in" && <SignIn />}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

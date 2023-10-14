import { Link, useLocation } from "react-router-dom";

import "../assets/css/Header.css";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const location = useLocation();

  function StartPageGroup() {
    const listItems = ["about", "testimonials", "features", "pricing"];

    return (
      <>
        {listItems.map((item, i) => (
          <li key={i}>
            <a href={`#${item}`}>
              {item[0].toUpperCase() + item.slice(1)} <span className="material-symbols-outlined">tag</span>
            </a>
          </li>
        ))}
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

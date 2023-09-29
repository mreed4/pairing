import { useContext } from "react";
import { AppContext } from "./Contexts/AppContext";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import "../assets/css/App.css";

import StartPage from "./Pages/StartPage";
import SignInPage from "./Pages/SignInPage";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light-theme" ? (
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </button>
  );
}

function Header() {
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

function App() {
  const { theme } = useContext(AppContext);

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<h2>Sign Up</h2>} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

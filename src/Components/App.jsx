import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import "../assets/css/App.css";

import StartPage from "./Pages/StartPage";
import SignInPage from "./Pages/SignInPage";

function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <h1>Pairings</h1>
      </Link>
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
          <li>
            <Link to="/sign-in" className="sign-in-link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<h2>Sign Up</h2>} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

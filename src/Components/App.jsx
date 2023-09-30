import { useContext } from "react";
import { AppContext } from "./Contexts/AppContext";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "../assets/css/App.css";

import StartPage from "./Pages/StartPage";
import SignInPage from "./Pages/SignInPage";

import Header from "./Content/Header";

function App() {
  const { theme } = useContext(AppContext);
  const location = useLocation();
  return (
    <div className={`app ${theme}`}>
      {location.pathname !== "/" && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<h2>Sign Up</h2>} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

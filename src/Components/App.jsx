import { useContext } from "react";
import { AppContext } from "./Contexts/AppContext";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "../assets/css/App.css";

import StartPage from "./Pages/StartPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
// import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";

import Header from "./Header";
import Footer from "./Footer";

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
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

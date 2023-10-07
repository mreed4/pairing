import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

import "../../assets/css/ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const { theme } = useContext(AppContext);
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [theme]);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  function handleForgotPassword(e) {
    e.preventDefault();
    console.log("Forgot Password");
  }
  return (
    <div id="forgot-password-page" className="app-page fade-in">
      <div>
        <h2>Forgot Password</h2>
        <p>Enter your email address and we will send you a link to reset your password.</p>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" ref={emailRef} />
          <button type="submit" className="button pink">
            Send Reset Link
          </button>
          <p className="helper white">
            Took a wrong turn? <Link to="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

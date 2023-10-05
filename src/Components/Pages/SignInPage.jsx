import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

import Checkbox from "../Checkbox";
import SocialsLogins from "../SocialsLogins";

import "../../assets/css/SignInPage.css";

export default function SignInPage() {
  const { theme } = useContext(AppContext);
  const emailRef = useRef();

  function handleSignIn(e) {
    e.preventDefault();
    console.log("Sign In");
  }

  useEffect(() => {
    emailRef.current.focus();
  }, [theme]);

  return (
    <div id="sign-in-page" className="app-page fade-in">
      <div>
        <h2>Sign in</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" ref={emailRef} />
          <label htmlFor="current-password">Password</label>
          <input type="password" id="current-password" autoComplete="current-password" />
          <Checkbox id="remember-me" label="Remember Me" checked={true} />
          <button type="submit" className="button pink">
            Sign In
          </button>
          <p className="helper italic right">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
          <SocialsLogins />
          <p className="helper white">
            New to Pairings? <Link to="/sign-up">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

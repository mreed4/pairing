import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Contexts/AppContext";

import "../../assets/css/SignUpPage.css";

export default function SignUpPage() {
  const { theme } = useContext(AppContext);
  const emailRef = useRef();

  function handleSignUp(e) {
    e.preventDefault();
    console.log("Sign Up");
  }

  useEffect(() => {
    emailRef.current.focus();
  }, [theme]);

  return (
    <div id="sign-up-page" className="app-page fade-in">
      <div>
        <h2>Join us</h2>
        {/* <p>Create a new account</p> */}
        <form onSubmit={handleSignUp}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" ref={emailRef} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="new-password" />
          <p className="helper italic">
            Password must be at least 8 characters long and contain at least 1 number and one 1 special character.
          </p>
          <button type="submit" className="button pink">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

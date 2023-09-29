import { useRef, useEffect } from "react";

import "../../assets/css/SignInPage.css";

export default function SignInPage() {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div id="sign-in-page" className="app-page fade-in">
      {/* <h2>Sign In</h2> */}
      {/* <p>Sign in to your account</p> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">
          Email
          <input type="email" id="email" autoComplete="email" ref={emailRef} />
        </label>
        <label htmlFor="current-password">
          Password
          <input type="password" id="current-password" autoComplete="current-password" />
        </label>
        <button type="submit" className="button pink">
          Sign In
        </button>
      </form>
    </div>
  );
}

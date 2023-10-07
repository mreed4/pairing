// https://uxplanet.org/12-best-practies-for-sign-up-and-login-page-design-69d6cd045cf

import { useRef, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

import Checkbox from "../Checkbox";
import SocialsLogins from "../SocialsLogins";

import "../../assets/css/SignInPage.css";

export default function SignInPage() {
  const { theme } = useContext(AppContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true); // [true, function(){}
  const [capsLock, setCapsLock] = useState(null);
  const [visble, setVisble] = useState(false); // [true, function(){}

  useEffect(() => {
    emailRef.current.focus();
  }, [theme]);

  useEffect(() => {
    window.addEventListener("keydown", checkCapsLock);

    return () => {
      window.removeEventListener("keydown", checkCapsLock);
    };
  }, []);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  function handleSignIn(e) {
    e.preventDefault();
    console.log("Sign In");
  }

  function checkCapsLock(e) {
    const capsLock = e.getModifierState("CapsLock");
    if (capsLock) {
      // console.log("Caps Lock is on");
      setCapsLock(true);
    } else {
      // console.log("Caps Lock is off");
      setCapsLock(false);
    }
  }

  function togglePasswordVisibility() {
    setVisble(!visble);
  }

  const capsLockIcon = capsLock ? "visible" : "hidden";

  function checkFields(event) {
    event.preventDefault();
    const allFields = [emailRef, passwordRef];
    const allFieldsFilled = allFields.every((field) => field.current.value !== "");
    setIsDisabled(!allFieldsFilled);
  }

  return (
    <div id="sign-in-page" className="app-page fade-in">
      <div>
        <h2>Sign in</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" ref={emailRef} />
          <label htmlFor="password" className="password-label">
            Password{" "}
            <span className="material-symbols-outlined visibility-icon" onClick={togglePasswordVisibility}>
              {visble ? "visibility" : "visibility_off"}
            </span>{" "}
            <span
              className={`material-symbols-outlined capslock-icon ${capsLockIcon}`}
              title={capsLock ? "Caps Lock is on" : "Caps Lock is off"}>
              keyboard_capslock_badge
            </span>
          </label>
          <input type={visble ? "text" : "password"} id="password" autoComplete="new-password" ref={passwordRef} onChange={checkFields} />
          <Checkbox id="remember-me" label="Remember Me" checked={true} />
          <button type="submit" className="button border pink" disabled={isDisabled}>
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

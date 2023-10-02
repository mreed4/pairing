import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Link } from "react-router-dom";

import "../../assets/css/SignUpPage.css";

export default function SignUpPage() {
  const { theme } = useContext(AppContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true); // [true, function(){}
  const [capsLock, setCapsLock] = useState(null);
  const [visble, setVisble] = useState(false); // [true, function(){}

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

  const capsLockIcon = capsLock ? "visble" : "hidden";

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  function checkFields(event) {
    event.preventDefault();
    const allFields = [firstNameRef, lastNameRef, emailRef, passwordRef];
    const allFieldsAreFilled = allFields.every((field) => field.current.value !== "");
    const passwordIsValid = passwordRegex.test(passwordRef.current.value);
    setIsDisabled(!allFieldsAreFilled || !passwordIsValid);
  }

  function handleSignUp(e) {
    e.preventDefault();
    console.log("Sign Up");
  }

  useEffect(() => {
    firstNameRef.current.focus();
  }, [theme]);

  useEffect(() => {
    window.addEventListener("keydown", checkCapsLock);

    return () => {
      window.removeEventListener("keydown", checkCapsLock);
    };
  }, []);

  return (
    <div id="sign-up-page" className="app-page fade-in">
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" autoComplete="given-name" ref={firstNameRef} onChange={checkFields} />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" autoComplete="family-name" ref={lastNameRef} onChange={checkFields} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" ref={emailRef} onChange={checkFields} />
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
          <input
            type={visble ? "text" : "password"}
            id="password"
            autoComplete="new-password"
            ref={passwordRef}
            pattern={passwordRegex}
            onChange={checkFields}
          />
          <p className="helper italic">
            Password must be at least 8 characters long and contain at least 1 number and one 1 special character.
          </p>
          <button type="submit" className="button pink" disabled={isDisabled}>
            Sign Up
          </button>
          <p className="helper white">
            Already have an account? <Link to="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

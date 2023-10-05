import "../assets/css/SocialsLogin.css";

export default function SocialsLogins() {
  return (
    <div className="socials-logins">
      <hr />
      <div>
        {/* <button className="button">
          <i className="fa-brands fa-linkedin"></i>Sign in with LinkedIn
        </button> */}
        <button className="button">
          <i className="fa-brands fa-google"></i>Sign in with Google
        </button>
        <button className="button">
          <i className="fa-brands fa-github"></i>Sign in with GitHub
        </button>
        {/* <button className="button">
          <i className="fa-brands fa-microsoft"></i>Sign in with Microsoft
        </button>
        <button className="button">
          <i className="fa-brands fa-facebook"></i>Sign in with Facebook
        </button> */}
      </div>
    </div>
  );
}

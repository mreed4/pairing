import "../assets/css/SocialsLogin.css";

export default function SocialsLogins() {
  return (
    <div className="socials-logins">
      <hr />
      <div>
        <button type="button " className="button border" onClick={() => console.log("Google button clicked")}>
          <i className="fa-brands fa-google"></i>Sign in with Google
        </button>
        <button type="button " className="button border" onClick={() => console.log("Github button clicked")}>
          <i className="fa-brands fa-github"></i>Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

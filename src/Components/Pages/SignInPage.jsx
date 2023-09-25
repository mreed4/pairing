import "../../assets/css/SignInPage.css";

export default function SignInPage() {
  return (
    <div id="sign-in-page" className="app-page fade-in">
      <h2>Sign In</h2>
      <p>Sign in to your account</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" autoComplete="email" />
        <label htmlFor="current-password">Password</label>
        <input type="password" id="current-password" autoComplete="current-password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

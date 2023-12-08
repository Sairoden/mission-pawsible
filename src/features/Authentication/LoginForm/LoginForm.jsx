// STYLES
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

// UI COMPONENTS
import { Button } from "../../../ui";

function Login() {
  return (
    <div className="login-container">
      <img
        src="login-banner.png"
        alt="Guy with a dog image"
        className="login-banner"
      />

      <h1 className="login-title">Log in</h1>

      <div className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input type="text" id="email" className="login-input" />

        <label htmlFor="email" className="login-label">
          Password
        </label>
        <input type="text" id="email" className="login-input" />

        <a href="#">
          <p className="login-forgot">Forget Password?</p>
        </a>
      </div>

      <div className="login-buttons-container">
        <button type="button" className="login-google">
          Sign in with Google <FcGoogle className="login-google-icon" />
        </button>

        <Button variation="primary" icon={true}>
          Log in
        </Button>
      </div>

      <Link to="/signup">
        <p className="signup-link">
          Don't have an account?{" "}
          <span className="signup-link-bold">Sign up</span>
        </p>
      </Link>
    </div>
  );
}

export default Login;

// STYLES
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button, Input } from "../../../ui";

function LoginForm() {
  return (
    <div className="login-container">
      <motion.img
        src="login-banner.png"
        alt="Guy with a dog image"
        className="login-banner"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
      />

      <h1 className="login-title">Log in</h1>

      <form className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <Input id="email" width="49vw" type="email" />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <Input id="password" width="49vw" type="password" />

        <a href="#">
          <p className="login-forgot">Forget Password?</p>
        </a>

        <div className="login-buttons-container">
          <button type="button" className="login-google">
            Sign in with Google <FcGoogle className="login-google-icon" />
          </button>

          <Button variation="primary" icon={true}>
            Log in
          </Button>
        </div>
      </form>

      <Link to="/signup" onClick={() => scrollTo(0, 0)}>
        <p className="signup-link">
          Don't have an account?{" "}
          <span className="signup-link-bold">Sign up</span>
        </p>
      </Link>
    </div>
  );
}

export default LoginForm;

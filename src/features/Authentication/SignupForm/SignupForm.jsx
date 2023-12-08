// STYLES
import "./SignupForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

// UI COMPONENTS
import { Button, Input } from "../../../ui";

function SignupForm() {
  return (
    <div className="signup-container">
      <img
        src="/signup-banner.png"
        alt="Guy with a dog image"
        className="signup-banner"
      />

      <h1 className="signup-title">Be a part of our growing family today!</h1>

      <form className="signup-form">
        <div className="grid-container">
          <div className="grid-item">
            <label htmlFor="firstName" className="signup-label">
              First Name
            </label>
            <Input id="firstName" width="22vw" />
          </div>

          <div className="grid-item">
            <label htmlFor="lastName" className="signup-label">
              Last Name
            </label>
            <Input id="lastName" width="22vw" />
          </div>

          <div className="grid-item">
            <label htmlFor="email" className="signup-label">
              Email
            </label>
            <Input id="email" width="22vw" type="email" />
          </div>

          <div className="grid-item">
            <label htmlFor="contactNumber" className="signup-label">
              Contact Number
            </label>
            <Input id="contactNumber" width="22vw" />
          </div>

          <div className="grid-item">
            <label htmlFor="address" className="signup-label">
              Address
            </label>
            <Input id="address" width="49vw" />
          </div>

          <div className="grid-item">
            <label htmlFor="password" className="signup-label">
              Password
            </label>
            <Input id="password" width="22vw" type="password" />
          </div>

          <div className="grid-item">
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password
            </label>
            <Input id="confirmPassword" width="22vw" type="password" />
          </div>
        </div>

        <div className="signup-buttons-container">
          <button type="button" className="signup-google">
            Sign in with Google <FcGoogle className="signup-google-icon" />
          </button>

          <Button variation="primary" icon={true}>
            Signup
          </Button>
        </div>
      </form>

      <Link to="/login">
        <p className="login-link">
          Already have an account?{" "}
          <span className="login-link-bold">Log in</span>
        </p>
      </Link>
    </div>
  );
}

export default SignupForm;

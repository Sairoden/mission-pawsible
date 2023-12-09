// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

// UI COMPONENTS
import { Button, Input, ErrorInput } from "../../../ui";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleLogin = data => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div className="login-container">
      <motion.img
        src="login-banner.png"
        alt="Guy with a dog image"
        className="login-banner"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <h1 className="login-title">Log in</h1>

      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor="email" className="login-label">
          Email <ErrorInput>{errors?.email?.message}</ErrorInput>
        </label>
        <Input
          id="email"
          width="49vw"
          type="email"
          register={register}
          required="Please provide a valid email address"
        />

        <label htmlFor="password" className="login-label">
          Password <ErrorInput>{errors?.password?.message}</ErrorInput>
        </label>
        <Input
          id="password"
          width="49vw"
          type="password"
          register={register}
          required="Please provide a password"
        />

        <a href="#">
          <p className="login-forgot">Forget Password?</p>
        </a>

        <div className="login-buttons-container">
          <button type="button" className="login-google">
            Sign in with Google <FcGoogle className="login-google-icon" />
          </button>

          <Button variation="primary" icon={true} type="submit">
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

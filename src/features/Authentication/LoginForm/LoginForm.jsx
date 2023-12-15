// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

// UI COMPONENTS
import { Button, Input, ErrorInput, Spinner } from "../../../ui";

// HOOKS
import { useLogin, useResendEmail } from "../../../hooks";

function LoginForm() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  // HOOKS
  const { login, isPending } = useLogin();
  const { resendEmail } = useResendEmail();

  const handleLogin = data => {
    if (!data.email || !data.password) return;

    login(data);
  };

  const handleResendEmail = () => {
    if (!getValues().email) {
      toast.error("Please provide a valid email address.");
      return;
    }

    resendEmail(getValues().email);
  };

  const handleForgotPassword = () => {
    if (!getValues().email || !getValues().password) {
      toast.error("Please provide your email and password.");
      return;
    }

    console.log(getValues().email, getValues().password);
  };

  if (isPending) return <Spinner />;

  return (
    <div className="login-container">
      <motion.img
        src="login-banner.png"
        alt="Guy with a dog image"
        className="login-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
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
          disabled={isPending}
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
          disabled={isPending}
        />

        <div className="forgot-container">
          <button
            type="button"
            className="forgot-button"
            onClick={handleForgotPassword}
          >
            <p className="login-forgot">Forget Password?</p>
          </button>

          <button
            type="button"
            className="forgot-button"
            onClick={handleResendEmail}
          >
            <p className="login-forgot">Resend Email?</p>
          </button>
        </div>

        <div className="login-buttons-container">
          <button type="button" className="login-google" disabled={isPending}>
            Sign in with Google <FcGoogle className="login-google-icon" />
          </button>

          <Button
            variation="primary"
            icon={true}
            type="submit"
            disabled={isPending}
            styles={{ padding: "1.6rem 7.5rem" }}
          >
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

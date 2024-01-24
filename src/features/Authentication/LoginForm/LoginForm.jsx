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
import { useLogin, useLoginWithGoogle } from "../../../hooks";

// ASSETS
import loginBanner from "../../../assets/login-banner.png";

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
  const { loginWithGoogle, isPending: isPending2 } = useLoginWithGoogle();

  const handleLogin = data => {
    if (!data.email || !data.password) return;

    login(data);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  if (isPending || isPending2) return <Spinner />;

  return (
    <div className="login container spacing-t spacing-b margin-b">
      {/* image container */}
      <div className="login-img">
        <motion.img
          src={loginBanner}
          alt="Guy with a dog image"
          className="login-img-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        />
      </div>

      {/* title container */}
      <div className="title">
        <h2>Welcome back to our growing family!</h2>
      </div>

      {/* body container */}
      <div className="login-body">
        {/* form */}
        <form className="login-body-form" onSubmit={handleSubmit(handleLogin)}>
          {/* email input*/}
          <label htmlFor="email" className="label">
            Email <ErrorInput>{errors?.email?.message}</ErrorInput>
          </label>
          <br />
          <Input
            id="email"
            type="email"
            register={register}
            required="Please provide a valid email address"
            disabled={isPending || isPending2}
          />
          <br />

          {/* password input*/}
          <label htmlFor="password" className="label">
            Password <ErrorInput>{errors?.password?.message}</ErrorInput>
          </label>
          <br />

          <Input
            id="password"
            type="password"
            register={register}
            required="Please provide a password"
            disabled={isPending || isPending2}
          />
          <br />

          {/* forgot password container*/}
          <div className="login-body-form-forget">
            {/* forget password button */}
            <Link to="/email">
              <h6 className="label">Forget Password?</h6>
            </Link>
            {/* forgot email button*/}

            <Link to="/email">
              <h6 className="label">Didn't receive a confirmation email?</h6>
            </Link>
          </div>
          <br />

          {/* login button container */}
          <div className="login-body-form-login">
            {/* login via google button */}
            <button
              type="button"
              className="login-body-form-google-button button other button-width"
              disabled={isPending || isPending2}
              onClick={handleGoogleLogin}
            >
              Sign in with Google
              <FcGoogle className="login-body-form-google-logo" />
            </button>
            <br />

            {/* login via user */}
            <Button
              variation="primary"
              size="width"
              icon={true}
              type="submit"
              disabled={isPending || isPending2}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <br />

      {/* signup link container */}
      <div className="login-body-signup">
        {/* signup text */}
        <h4 className="login-body-signup-text">
          Don't have an account?{" "}
          <Link to="/signup" onClick={() => scrollTo(0, 0)}>
            <span className="login-body-signup-text-span">Sign up</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default LoginForm;

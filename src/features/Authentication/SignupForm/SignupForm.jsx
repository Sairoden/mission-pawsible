// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./SignupForm.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button, Input, ErrorInput, Spinner } from "../../../ui";

// HOOKS
import { useSignup, useLoginWithGoogle } from "../../../hooks";

// ASSETS
import signupBanner from "../../../assets/signup-banner.png";

function SignupForm() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const { signup, isPending } = useSignup();
  const { loginWithGoogle, isPending: isPending2 } = useLoginWithGoogle();

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  const handleSignup = data => {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.contactNumber ||
      !data.address ||
      !data.password ||
      !data.confirmPassword
    )
      return;

    if (data.password !== data.confirmPassword) return;

    signup(data);
  };

  if (isPending || isPending2) return <Spinner />;

  return (
    <div className="signup-container">
      <motion.img
        src={signupBanner}
        alt="Guy with a dog image"
        className="signup-banner"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <h1 className="signup-title">Be a part of our growing family today!</h1>

      <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
        <div className="grid-container">
          <div className="grid-item">
            <label htmlFor="firstName" className="signup-label">
              First Name <ErrorInput>{errors?.firstName?.message}</ErrorInput>
            </label>
            <Input
              id="firstName"
              width="22vw"
              register={register}
              required="Please provide a first name"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="lastName" className="signup-label">
              Last Name <ErrorInput>{errors?.lastName?.message}</ErrorInput>
            </label>
            <Input
              id="lastName"
              width="22vw"
              register={register}
              required="Please provide a last name"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="email" className="signup-label">
              Email <ErrorInput>{errors?.email?.message}</ErrorInput>
            </label>
            <Input
              id="email"
              width="22vw"
              type="email"
              register={register}
              required="Please provide a valid email address"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="contactNumber" className="signup-label">
              Contact Number{" "}
              <ErrorInput>{errors?.contactNumber?.message}</ErrorInput>
            </label>
            <Input
              id="contactNumber"
              width="22vw"
              register={register}
              required="Please provide"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="address" className="signup-label">
              Address <ErrorInput>{errors?.address?.message}</ErrorInput>
            </label>
            <Input
              id="address"
              width="49vw"
              register={register}
              required="Please provide an address"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="password" className="signup-label">
              Password <ErrorInput>{errors?.password?.message}</ErrorInput>
            </label>
            <Input
              id="password"
              width="22vw"
              type="password"
              register={register}
              required="Please provide a password"
              disabled={isPending || isPending2}
            />
          </div>

          <div className="grid-item">
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password{" "}
              <ErrorInput>{errors?.confirmPassword?.message}</ErrorInput>
            </label>
            <Input
              id="confirmPassword"
              width="22vw"
              type="password"
              register={register}
              required="Password need to match"
              password={getValues().password}
              disabled={isPending || isPending2}
            />
          </div>
        </div>

        <div className="signup-buttons-container">
          <button
            type="button"
            className="signup-google"
            disabled={isPending || isPending2}
            onClick={handleGoogleLogin}
          >
            Sign up with Google <FcGoogle className="signup-google-icon" />
          </button>

          <Button
            variation="primary"
            icon={true}
            type="submit"
            disabled={isPending || isPending2}
            size="large"
          >
            Signup
          </Button>
        </div>
      </form>

      <Link to="/login" onClick={() => scrollTo(0, 0)}>
        <p className="login-link">
          Already have an account?{" "}
          <span className="login-link-bold">Log in</span>
        </p>
      </Link>
    </div>
  );
}

export default SignupForm;

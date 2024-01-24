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
    <div className="signUp container spacing-t spacing-b margin-b">
      {/* image container */}
      <div className="signUp-img">
        <motion.img
          src={signupBanner}
          alt="Guy with a dog image"
          className="signUp-img-content"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      {/* header container */}
      <div className="signUp-header title">
        <h2>Be a part of our growing family today!</h2>
      </div>
      {/* body contaienr */}
      <div className="signUp-body">
        {/* form */}
        <form className="signUp-body-form" onSubmit={handleSubmit(handleSignup)}>
          
          {/* name container */}
          <div className="signUp-body-form-name">
            {/* last name */}
            <div className="signUp-body-form-input">
              <label htmlFor="lastName" className="label">
                Last Name <ErrorInput>{errors?.lastName?.message}</ErrorInput>
              </label>
              <br />
              <Input
                id="lastName"
                register={register}
                required="Please provide a last name"
                disabled={isPending || isPending2}
              />
              <br />
            </div>
            {/* first name */}
            <div className="signUp-body-form-input">
              <label htmlFor="firstName" className="label">
                First Name <ErrorInput>{errors?.firstName?.message}</ErrorInput>
              </label>
              <br />
              <Input
                id="firstName"
                register={register}
                required="Please provide a first name"
                disabled={isPending || isPending2}
              />
            </div>
            <br />
          </div>

          {/* address */}
          <div className="signUp-body-form-input">
            <label htmlFor="address" className="label">
              Address <ErrorInput>{errors?.address?.message}</ErrorInput>
            </label>
            <br />
            <Input
              id="address"
              register={register}
              required="Please provide an address"
              disabled={isPending || isPending2}
            />
            <br />
          </div>

          {/* contact container */}
          <div className="signUp-body-form-contact">
            {/* email */}
            <div className="signUp-body-form-input">
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
            </div>
            {/* contact number */}
            <div className="signUp-body-form-input">
              <label htmlFor="contactNumber" className="label">
                Contact Number{" "}
                <ErrorInput>{errors?.contactNumber?.message}</ErrorInput>
              </label>
              <br />
              <Input
                id="contactNumber"
                register={register}
                required="Please provide"
                disabled={isPending || isPending2}
              />
              <br />
            </div>    
          </div>

          {/* password container */}
          <div className="signUp-body-form-password">
            {/* password */}
            <div className="signUp-body-form-input">
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
            </div>
            {/* confirm password */}
            <div className="signUp-body-form-input">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password{" "}
                <ErrorInput>{errors?.confirmPassword?.message}</ErrorInput>
              </label>
              <br />
              <Input
                id="confirmPassword"
                type="password"
                register={register}
                required="Password need to match"
                password={getValues().password}
                disabled={isPending || isPending2}
              />
            </div>
            <br />
          </div>
          <br />
          {/* signup button container */}
          <div className="signUp-body-form-signup">
            {/* login via google button */}
            <button
              type="button"
              className="signUp-body-form-google-button button other-button button-width"
              disabled={isPending || isPending2}
              onClick={handleGoogleLogin}
            >
              Sign up with Google 
              <FcGoogle className="signUp-body-form-google-logo google-icon" />
            </button>
            <br />
            {/* sign up via user */}
            <Button
              variation="primary"
              size="width"
              icon={true}
              type="submit"
              disabled={isPending || isPending2}
            >
              Signup
            </Button>
          </div>
        </form>
      </div>
      <br />
      {/* login link container */}
      <div className="signUp-body-login">
        {/* signup text */}
        <h4 className="signUp-body-login-text">
          Already have an account?{" "}
          <Link to="/login" onClick={() => scrollTo(0, 0)}>
            <span className="signUp-body-login-text-span">Log in</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default SignupForm;

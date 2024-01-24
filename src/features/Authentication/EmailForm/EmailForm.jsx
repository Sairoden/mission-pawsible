// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./EmailForm.scss";
import emailBanner from "../../../assets/email.png";
import toast from "react-hot-toast";

// UI COMPONENTS
import { Button, ErrorInput, Input, Spinner } from "../../../ui";

// HOOKS
import { useForgotPassword, useResendEmail } from "../../../hooks";

function EmailForm() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { resendEmail, isPending } = useResendEmail();
  const { forgotPassword, isPending: isPending2 } = useForgotPassword();

  const handleResendEmail = () => {
    const email = getValues().email;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || !emailRegex.test(email))
      return toast.error("Please provide a valid email address");

    resendEmail(email, {
      onSuccess: reset(),
    });
  };

  const handleForgotPassword = () => {
    const email = getValues().email;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || !emailRegex.test(email))
      return toast.error("Please provide a valid email address");

    forgotPassword(email, {
      onSuccess: reset(),
    });
  };

  if (isPending || isPending2) return <Spinner />;

  return (
    <div className="emailVer container spacing-t spacing-b margin-b">
      {/*image container  */}
      <div className="emailVer-img">
        <img
          className="emailVer-img-content"
          src={emailBanner}
          alt="Email banner"
        />
      </div>

      {/* title container */}
      <div className="title">
        <h2>Account Recovery</h2>
      </div>

      {/* body container */}
      <div className="emailVer-body">
        <p className="emailVer-body-text">
          Please provide the email address that you used when you signed up for
          your account. We will send you an email that will allow you to reset
          your password or confirm your email again.
        </p>

        <form className="emailVer-body-form" onClick={e => e.preventDefault()}>
          {/* email */}
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

          {/* button */}
          <div className="emailVer-body-form-button btns">
            {/* resend email button */}
            <Button
              variation="secondary"
              size="width"
              onClick={handleResendEmail}
              disabled={isPending || isPending2}
            >
              Resend email confirmation
            </Button>

            {/* forget password button */}
            <Button
              variation="primary"
              size="width"
              icon={true}
              onClick={handleForgotPassword}
              disabled={isPending || isPending2}
            >
              Forget password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;

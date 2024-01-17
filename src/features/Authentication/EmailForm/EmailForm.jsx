// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./EmailForm.scss";
import emailBanner from "../../../assets/email.png";

// UI COMPONENTS
import { Button, ErrorInput, Input } from "../../../ui";

function EmailForm() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="email-form">
      <img src={emailBanner} alt="Email banner" />

      <h4>
        Please provide the email address that you used when you signed up for
        your account. We will send you an email that will allow you to reset
        your password or verify your email again.
      </h4>

      <form action="">
        <label htmlFor="email" className="login-label">
          Email <ErrorInput>{errors?.email?.message}</ErrorInput>
        </label>
        <Input
          id="email"
          size="large"
          type="email"
          register={register}
          required="Please provide a valid email address"
        />

        <Button variation="secondary" type="submit">
          Resend email verifcation
        </Button>

        <Button variation="primary" icon={true} type="submit">
          Forget password
        </Button>
      </form>
    </div>
  );
}

export default EmailForm;

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
    <div className="emailVer container spacing-t spacing-b margin-b">
      {/*image container  */}
      <div className="emailVer-img">
        <img className="emailVer-img-content" src={emailBanner} alt="Email banner" />
      </div>
      {/* title container */}
      <div className="title">
        <h2>
          Forgot your password?
        </h2>
      </div>
      {/* body container */}
      <div className="emailVer-body">
        <p className="emailVer-body-text">
          Please provide the email address that you used when you signed up for
            your account. We will send you an email that will allow you to reset
            your password or verify your email again.
        </p>
        <form className="emailVer-body-form" action="">
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
          />
          <br />
          {/* button */}
          <div className="emailVer-body-form-button btns">
            {/* resend email button */}
            <Button variation="secondary"
             size="width"
             type="submit"
            >
              Resend email verifcation
            </Button>
            {/* forget password button */}
            <Button variation="primary" 
             size="width" icon={true} 
             type="submit"
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

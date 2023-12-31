// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./UpdateProfile.scss";

// UI COMPONENTS
import { Button, Input, InputFile, Spinner } from "../../../ui";

// HOOKS
import { useGetCurrentUser } from "../../../hooks";

function UpdateProfile() {
  const { user, isPending } = useGetCurrentUser();

  const { email } = user;
  const { address, avatar, contactNumber, firstName, lastName } =
    user.user_metadata || {};

  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getdefaultValues,
  } = useForm();

  if (isPending) return <Spinner />;

  const handleUpdateProfile = data => {
    console.log("YES SIR TESTING");
  };

  return (
    <div className="update-white-container">
      <div className="update-main-container">
        <div className="update-left-container">
          <div>
            <img src={avatar} alt="profileIcon" className="update-left-image" />
          </div>
          <div className="update-file-input">
            <InputFile />
          </div>
        </div>

        <div className="update-right-container">
          <div className="update-right-header">
            <h1 className="update-header-text">UPDATE PROFILE</h1>
          </div>

          <form
            className="update-form-content"
            onSubmit={handleSubmit(handleUpdateProfile)}
          >
            <div className="update-right-form1">
              <div>
                <Input
                  id="lastName"
                  size="small"
                  register={register}
                  defaultValue={lastName}
                />
                <br />
                <label htmlFor="lastName" className="right-form-label">
                  LAST NAME
                </label>
                <br />
              </div>

              <div>
                <Input
                  id="firstName"
                  size="small"
                  register={register}
                  defaultValue={firstName}
                />
                <br />
                <label htmlFor="firstName" className="right-form-label">
                  FIRST NAME
                </label>
              </div>
            </div>

            <div className="update-right-form2">
              <Input
                id="address"
                size="medium"
                register={register}
                defaultValue={address}
              />
              <br />
              <label htmlFor="address">ADDRESS</label>
            </div>

            <div className="update-right-form3">
              <Input
                type="email"
                id="email"
                size="medium"
                register={register}
                defaultValue={email}
              />
              <br />
              <label htmlFor="email" className="right-form-label">
                EMAIL
              </label>
            </div>

            <div className="update-right-form4">
              <div>
                <Input
                  id="contactNumber"
                  size="small"
                  register={register}
                  required={false}
                  defaultValue={contactNumber}
                />
                <br />
                <label htmlFor="contactNumber" className="right-form-label">
                  CONTACT NUMBER
                </label>
              </div>
              <div>
                <Input
                  type="password"
                  id="password"
                  size="small"
                  register={register}
                  required={false}
                />
                <br />
                <label htmlFor="password" className="right-form-label">
                  CHANGE PASSWORD
                </label>
              </div>
            </div>

            <div className="update-right-button">
              <Button
                variation="primary"
                icon={true}
                type="submit"
                size="medium"
              >
                SAVE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;

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
    console.log("YEESE TESTING");
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
            <div className="update-form1">
              <Input
                id="lastName"
                width="22vw"
                register={register}
                defaultValue={lastName}
              />
              <br />
              <label htmlFor="lastName" className="right-form-label">
                LAST NAME
              </label>
            </div>

            <div className="update-form2">
              <Input
                id="firstName"
                width="22vw"
                register={register}
                defaultValue={firstName}
              />
              <br />
              <label htmlFor="firstName" className="right-form-label">
                FIRST NAME
              </label>
            </div>

            <div className="update-form3">
              <Input
                id="address"
                width="47vw"
                register={register}
                className="address-input"
                defaultValue={address}
              />
              <br />
              <label htmlFor="address" className="right-form-label">
                ADDRESS
              </label>
            </div>

            <div className="update-form4">
              <Input
                type="email"
                id="email"
                width="22vw"
                register={register}
                defaultValue={email}
              />
              <br />
              <label htmlFor="email" className="right-form-label">
                EMAIL
              </label>
            </div>

            <div className="update-form5">
              <Input
                id="contactNumber"
                width="22vw"
                register={register}
                defaultValue={contactNumber}
              />
              <br />
              <label htmlFor="contactNumber" className="right-form-label">
                CONTACT NUMBER
              </label>
            </div>

            <div className="update-form6">
              <Input
                id="contactNumber"
                width="22vw"
                register={register}
                required={false}
              />
              <br />
              <label htmlFor="contactNumber" className="right-form-label">
                CONTACT NUMBER
              </label>
            </div>

            <div className="update-form7">
              <Input
                type="password"
                id="password"
                width="22vw"
                register={register}
                required={false}
              />
              <br />
              <label htmlFor="password" className="right-form-label">
                CHANGE PASSWORD
              </label>
            </div>

            <div className="update-right-button">
              <Button
                variation="primary"
                icon={true}
                styles={{ padding: "2vh 4vw" }}
                type="submit"
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

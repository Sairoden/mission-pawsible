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
    <div className="updateProfile spacing-t spacing-b">
      <div className="container">
      <div className="updateProfile-header">
            <h2 className="updateProfile-header-main">UPDATE PROFILE</h2>
          </div>
        <div className="updateProfile-left">
          <div className="updateProfile-left-image">
            <img src={avatar} alt="profileIcon" className="updateProfile-left-image-content" />
          </div>
          <div className="updateProfile-left-fileUpload">
            <InputFile />
          </div>
        </div>

        <div className="updateProfile-right">
          <form
            className="updateProfile-right-body"
            onSubmit={handleSubmit(handleUpdateProfile)}
          >
            <div className="updateProfile-right-body-name">
              {/* last name */}
              <div className="updateProfile-right-body-input">
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
              {/* first name */}
              <div className="updateProfile-right-body-input">
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

            <div className="updateProfile-right-body-address">
              {/* address */}
              <div className="updateProfile-right-body-input">
                <Input
                  id="address"
                  size="medium"
                  register={register}
                  defaultValue={address}
                />
                <br />
                <label htmlFor="address">ADDRESS</label>
              </div>
            </div>

            <div className="updateProfile-right-body-contact">
              {/* email */}
              <div className="updateProfile-right-body-input">
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
              {/* contact number */}
              <div className="updateProfile-right-body-input">
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
            </div>

            <div className="update-right-form4">
              
              <div className="updateProfile-right-body-input">
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

            <div className="update-right-button btns">
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
    // </div>
  );
}

export default UpdateProfile;

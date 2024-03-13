// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./UpdateProfile.scss";
import toast from "react-hot-toast";

// UI COMPONENTS
import { Button, Input, InputFile, Spinner, ErrorInput } from "../../../ui";

// HOOKS
import { useGetCurrentUser, useUpdateProfile } from "../../../hooks";

function UpdateProfile() {
  const { user, isPending } = useGetCurrentUser();
  const { updateProfile, isPending: isPending2 } = useUpdateProfile();

  const { email } = user || "";
  const { address, avatar, contactNumber, firstName, lastName } =
    user?.user_metadata || {};

  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (isPending || isPending2) return <Spinner />;

  const handleUpdateProfile = data => {
    if (!data.firstName || !data.lastName || !data.email) return;

    if (data.email !== email)
      toast.error("Email Change Confirmation Required", { duration: 10000 });

    updateProfile(data);
  };

  return (
    <div className="updateProfile spacing-t spacing-b">
      <div className="container">
        <div className="title">
          <h2>UPDATE PROFILE</h2>
        </div>

        <form
          className="updateProfile-body-right-form"
          onSubmit={handleSubmit(handleUpdateProfile)}
        >
          <div className="updateProfile-body">
            <div className="updateProfile-body-left">
              <div className="updateProfile-body-left-image">
                <img
                  src={avatar}
                  alt="profileIcon"
                  className="updateProfile-body-left-image-content"
                />
              </div>

              <div className="updateProfile-body-left-fileUpload">
                <InputFile
                  register={register}
                  id="avatar"
                  accept="image/*"
                  disabled={isPending || isPending2}
                />
              </div>
            </div>

            <hr className="divider" />

            <div className="updateProfile-body-right">
              <div className="updateProfile-body-right-form-name">
                {/* last name */}
                <div className="updateProfile-body-right-form-input">
                  <Input
                    id="lastName"
                    size="small"
                    register={register}
                    defaultValue={lastName}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="lastName" className="label">
                    LAST NAME
                    <ErrorInput>{errors?.lastName?.message}</ErrorInput>
                  </label>
                  <br />
                </div>

                {/* first name */}
                <div className="updateProfile-body-right-form-input">
                  <Input
                    id="firstName"
                    size="small"
                    register={register}
                    defaultValue={firstName}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="firstName" className="label">
                    FIRST NAME
                    <ErrorInput>{errors?.firstName?.message}</ErrorInput>
                  </label>
                </div>
              </div>

              <div className="updateProfile-body-right-form-address">
                {/* address */}
                <div className="updateProfile-body-right-form-input">
                  <Input
                    id="address"
                    size="medium"
                    register={register}
                    defaultValue={address}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="address" className="label">
                    ADDRESS
                    <ErrorInput>{errors?.address?.message}</ErrorInput>
                  </label>
                </div>
              </div>

              <div className="updateProfile-body-right-form-contact">
                {/* email */}
                <div className="updateProfile-body-right-form-input">
                  <Input
                    type="email"
                    id="email"
                    size="medium"
                    register={register}
                    defaultValue={email}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="email" className="label">
                    EMAIL
                    <ErrorInput>{errors?.email?.message}</ErrorInput>
                  </label>
                </div>

                {/* contact number */}
                <div className="updateProfile-body-right-form-input">
                  <Input
                    id="contactNumber"
                    size="small"
                    register={register}
                    required={false}
                    defaultValue={contactNumber}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="contactNumber" className="label">
                    CONTACT NUMBER
                    <ErrorInput>{errors?.contactNumber?.message}</ErrorInput>
                  </label>
                </div>
              </div>

              <div className="updateProfile-body-right-form-password">
                <div className="updateProfile-body-right-form-input">
                  <Input
                    type="password"
                    id="password"
                    size="small"
                    register={register}
                    required={false}
                    disabled={isPending || isPending2}
                  />
                  <br />
                  <label htmlFor="password" className="label">
                    CHANGE PASSWORD
                    <ErrorInput>{errors?.password?.message}</ErrorInput>
                  </label>
                </div>
              </div>

              <div className="update-body-right-form-button btns">
                <Button
                  variation="primary"
                  icon={true}
                  type="submit"
                  size="width"
                  disabled={isPending || isPending2}
                >
                  SAVE
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;

// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./UpdateProfile.scss";

// UI COMPONENTS
import { Button, Input, InputFile } from "../../../ui";

function UpdateProfile() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="update-white-container">
      <div className="update-main-container">
        <div className="update-left-container">
          <div>
            <img
              src="/public/profile.png"
              alt="profileIcon"
              className="update-left-image"
            />
          </div>
          <div className="update-file-input">
            <InputFile />
          </div>
        </div>

        <div className="update-right-container">
          <div className="update-right-header">
            <h1 className="update-header-text">UPDATE PROFILE</h1>
          </div>

          <form className="update-form-content">
            <div className="update-form1">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                LAST NAME
              </label>
            </div>
            <div className="update-form2">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                FIRST NAME
              </label>
            </div>

            <div className="update-form3">
              <Input
                id="address"
                width="47vw"
                register={register}
                className="address-input"
              />
              <br />
              <label htmlFor="text" className="right-form-label">
                ADDRESS
              </label>
            </div>
            <div className="update-form4">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                EMAIL
              </label>
            </div>
            <div className="update-form5">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                CONTACT NUMBER
              </label>
            </div>
            <div className="update-form6">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                PASSWORD
              </label>
            </div>
            <div className="update-form7">
              <Input id="firstName" width="22vw" register={register} />
              <br />
              <label htmlFor="text" className="right-form-label">
                CHANGE PASSWORD
              </label>
            </div>
          </form>

          <div className="update-right-button">
            <Button
              variation="primary"
              icon={true}
              styles={{ padding: "1.6rem 6rem" }}
            >
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;

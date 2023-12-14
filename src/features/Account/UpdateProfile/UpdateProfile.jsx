// STYLES
import "./UpdateProfile.scss";
import { Button } from "../../../ui";

function UpdateProfile() {
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
          <div>
            <Button variation="primary" className="profile-left-btn">
              EDIT IMAGE
            </Button>
          </div>
        </div>

        <div className="update-right-container">
          <div className="update-right-header">
            <h1 className="update-header-text">UPDATE PROFILE</h1>
          </div>

          <div className="update-form-content">
            <div className="update-form1">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                LAST NAME:
              </label>
            </div>
            <div className="update-form2">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                FIRST NAME
              </label>
            </div>
            <div className="update-form3">
              <input type="text" className="address-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                ADDRESS:
              </label>
            </div>
            <div className="update-form4">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                EMAIL:
              </label>
            </div>
            <div className="update-form5">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                CONTACT NUMBER:
              </label>
            </div>
            <div className="update-form6">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                PASSWORD:
              </label>
            </div>
            <div className="update-form7">
              <input type="text" className="update-input" />
              <br />
              <label htmlFor="text" className="right-form-label">
                CHANGE PASSWORD:
              </label>
            </div>
          </div>
          <div className="update-right-button">
            <Button variation="primary">SAVE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;

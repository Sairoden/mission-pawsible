// STYLES
import "./Profile.scss";

// UI COMPONENTS
import { Button, Spinner } from "../../../ui";

// HOOKS
import { useLogout } from "../../../hooks";

function Profile() {
  const { logout, isPending } = useLogout();

  if (isPending) return <Spinner />;

  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <div className="main-content">
          <div className="Account-img">
            <img src="/uploadimage.png" alt="profileIcon" width={150} />
          </div>
          <div className="Account-header">
            <h4 className="Account-text">Last Name, First Name</h4>
          </div>
        </div>
        <div className="middle_container">
          <div className="middle-content">
            <div className="Account-details">
              <div>
                <span className="Account-span">EMAIL:</span>
              </div>
              <div>
                <span className="Account_emailText">andreachiu@yahoo.com</span>
              </div>
            </div>
            <div className="Account-contact">
              <div>
                <span className="Account-span">CONTACT:</span>
              </div>
              <div>
                <span className="Account_emailText">+63 917 1234567</span>
              </div>
            </div>
            <div className="Account-address">
              <div>
                <span className="Account-span">ADDRESS:</span>
              </div>
              <div>
                <span className="Account_emailText">
                  94 Kamuning Road Interweave Building,Brgy. Kamuning, Quezon
                  City
                </span>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <Button variation="primary">Edit Profile</Button>
            <Button variation="primary" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="register_container">
          <div className="register-main-container">
            <div className="register_main_content">
              <div className="register-header">
                <h4>REGISTERED LOST PET</h4>
                <button className="register-btnAdd">ADD +</button>
              </div>
            </div>
            <div className="register-middle-content">
              <div className="register-details">
                <div className="Register-container-img">
                  <img src="/shitsu.png" alt="cardImage" />
                </div>
                <div>
                  <h3 className="register-middle-header">
                    MO5-Poodle Tiny Yellow
                  </h3>
                  <span className="Registered-spanText">
                    GENDER: Female Last Seen: Nov 12,2019
                  </span>
                </div>
                <div className="register-middle-btn">
                  <button className="Update-btn">UPDATE</button>
                  <button className="listing-btn">CLOSE LISTING</button>
                </div>
              </div>
              <div className="register-details">
                <div className="Register-container-img">
                  <img src="/public/shitsu.png" alt="cardImage" />
                </div>
                <div>
                  <h3 className="register-middle-header">
                    MO5-Poodle Tiny Yellow
                  </h3>
                  <span className="Registered-spanText">
                    GENDER: Female Last Seen: Nov 12,2019
                  </span>
                </div>
                <div className="register-middle-btn">
                  <button className="Update-btn">UPDATE</button>
                  <button className="listing-btn">CLOSE LISTING</button>
                </div>
              </div>
              <div className="register-details">
                <div className="Register-container-img">
                  <img src="/public/shitsu.png" alt="cardImage" />
                </div>
                <div>
                  <h3 className="register-middle-header">
                    MO5-Poodle Tiny Yellow
                  </h3>
                  <span className="Registered-spanText">
                    GENDER: Female Last Seen: Nov 12,2019
                  </span>
                </div>
                <div className="register-middle-btn">
                  <button className="Update-btn">UPDATE</button>
                  <button className="listing-btn">CLOSE LISTING</button>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <Button variation="primary">SHOW MORE</Button>
            </div>
          </div>
          <div className="register-footer-container">
            <div className="register-footer-content">
              <div className="register-header">
                <h4>REGISTERED FOUND PET</h4>
                <button className="register-btnAdd">ADD +</button>
              </div>
            </div>
            <div className="register-footer-text">
              <h3 className="middle_footer_text">NO ENTRY</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

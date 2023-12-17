// REACT & LIBRARIES
import { NavLink } from "react-router-dom";

// STYLES
import "./Profile.scss";

// UI COMPONENTS
import { Button, Spinner } from "../../../ui";

// HOOKS
import { useLogout } from "../../../hooks";

// FEATURES COMPONENTS
import { RegisteredPet } from "../../index";

function Profile() {
  const { logout, isPending } = useLogout();

  if (isPending) return <Spinner />;

  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <div className="main-content">
          <div className="account-img">
            <img src="profile.png" alt="profileIcon" className="profile-img" />
          </div>

          <div className="account-header">
            <h4 className="account-text">Sairoden Gandarosa</h4>
          </div>
        </div>

        <div className="middle_container">
          <div className="middle-content">
            <div className="account-details">
              <div>
                <span className="account-span">EMAIL:</span>
              </div>

              <div>
                <span className="account_emailText">
                  odingandarosa@gmail.com
                </span>
              </div>
            </div>

            <div className="account-contact">
              <div>
                <span className="account-span">CONTACT:</span>
              </div>

              <div>
                <span className="account_emailText">09215390606</span>
              </div>
            </div>

            <div className="account-address">
              <div>
                <span className="account-span">ADDRESS:</span>
              </div>

              <div>
                <span className="account_emailText">
                  94 Kamuning Road Interweave Building,Brgy. Kamuning, Quezon
                  City 94 Kamuning Road Interweave Building,Brgy. Kamuning,
                  Quezon City
                </span>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <NavLink to="/account/update">
              <Button variation="primary" styles={{ padding: "2vh 3vw" }}>
                Update
              </Button>
            </NavLink>
            <Button
              variation="secondary"
              onClick={logout}
              styles={{ padding: "2vh 3vw" }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <RegisteredPet />
    </div>
  );
}

export default Profile;

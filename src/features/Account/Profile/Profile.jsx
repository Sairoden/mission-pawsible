// STYLES
import "./Profile.scss";

// UI COMPONENTS
import { Button, Spinner } from "../../../ui";

// HOOKS
import { useLogout } from "../../../hooks";

import { motion } from "framer-motion";

function Profile() {
  const { logout, isPending } = useLogout();

  if (isPending) return <Spinner />;

  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <div className="main-content">
          <div className="account-img">
            <img
              loading="lazy"
              src="profile.png"
              alt="profileIcon"
              className="profile-img"
            />
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
            <Button variation="primary" type="submit">
              Update
            </Button>
            <Button variation="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="register_white_container">
          <div className="register-gray-container">
            <div className="register_main_content">
              <div className="register-header">
                <h4>REGISTERED LOST PET</h4>
                <button className="register-btnAdd">ADD +</button>
              </div>
              <div>
                {" "}
                <h3 className="register-footer-text">No Entry</h3>
              </div>
            </div>

            <div className="register-card-grid">
              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>

              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>

              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <Button variation="primary">SHOW MORE</Button>
            </div>
          </div>

          <div className="register-gray-container">
            <div className="register_main_content">
              <div className="register-header">
                <h4>REGISTERED FOUND PET</h4>
                <button className="register-btnAdd">ADD +</button>
              </div>
              <div>
                {" "}
                <h3 className="register-footer-text">No Entry</h3>
              </div>
            </div>

            <div className="register-card-grid">
              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>

              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>

              <div className="register-middle-container">
                <div className="middle-img-container">
                  <img
                    src="/public/shitsu.png"
                    alt="shitsupic"
                    width={330}
                    className="register-img"
                  />
                </div>
                <div>
                  <div>
                    <h3>MO5-POODLE TINY YELLOW</h3>
                  </div>
                  <div className="register-span-container">
                    <span className="span-text">Gender: male</span>
                    <span className="span-text">Last seen: Nov 12, 2020</span>
                  </div>
                  <div className="register-button-container">
                    <button className="update-btn">UPDATE</button>
                    <button className="listing-btn">CLOSE LISTING</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <Button variation="primary">SHOW MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

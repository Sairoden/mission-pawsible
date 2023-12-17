// STYLES
import "./RegisteredPet.scss";

import { Button } from "../../../ui";

function RegisteredPet() {
  return (
    <div>
      <div className="register_white_container">
        <div className="register-gray-container">
          <div className="register_main_content">
            <div className="register-header">
              <h4>REGISTERED LOST PET</h4>
              <button className="register-btnAdd">
                ADD{" "}
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>+</span>
              </button>
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
                <div className="register-h3">
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
                <div className="register-h3">
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
                <div className="register-h3">
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
            <Button variation="primary" styles={{ padding: "1.5vh 1.5vw" }}>
              SHOW MORE
            </Button>
          </div>
        </div>

        <div className="register-gray-container">
          <div className="register_main_content">
            <div className="register-header">
              <h4>REGISTERED FOUND PET</h4>
              <button className="register-btnAdd">
                ADD{" "}
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>+</span>
              </button>
            </div>
            <div>
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
                <div className="register-h3">
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
                <div className="register-h3">
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
                <div className="register-h3">
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
            <Button variation="primary" styles={{ padding: "1.5vh 1.5vw" }}>
              SHOW MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPet;

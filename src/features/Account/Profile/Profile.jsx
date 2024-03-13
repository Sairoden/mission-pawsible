// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./Profile.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

// CONTEXTS
import { useChatContext } from "../../../contexts";

function Profile({ user, logout }) {
  const { email } = user;
  const { address, avatar, contactNumber, firstName, lastName } =
    user.user_metadata || {};
  const { setConnected } = useChatContext();
  const navigate = useNavigate();

  return (
    <div className="profile-main-container">
      <div className="main-content">
        <div className="account-img">
          <img src={avatar} alt="profileIcon" className="profile-img" />
        </div>

        <div className="account-header">
          <h4 className="account-text">
            {firstName} {lastName}
          </h4>

          <button
            className="button-chat"
            onClick={() => {
              setConnected(true);
              navigate("/chat");
            }}
          >
            View Chat
          </button>
        </div>
      </div>

      <div className="middle_container">
        <div className="middle-content">
          <div className="account-details">
            <div>
              <span className="account-span">EMAIL:</span>
            </div>

            <div>
              <span className="account_emailText">{email}</span>
            </div>
          </div>

          <div className="account-contact">
            <div>
              <span className="account-span">CONTACT:</span>
            </div>

            <div>
              <span className="account_emailText">{contactNumber}</span>
            </div>
          </div>

          <div className="account-address">
            <div>
              <span className="account-span">ADDRESS:</span>
            </div>

            <div>
              <span className="account_emailText">{address}</span>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <Button
            variation="primary"
            size="medium"
            onClick={() => navigate("/account/update")}
          >
            Update
          </Button>

          <Button variation="secondary" onClick={logout} size="medium">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

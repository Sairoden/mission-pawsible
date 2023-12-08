import React from "react";
import "./Profile.scss";
import { Button } from "../../../ui";

function Profile() {
  return (
    <div className="profile-container">
      <div className="container">
        <div className="main-content">
          <div className="Account-img">
            <img src="/public/uploadimage.png" alt="profileIcon" width={150} />
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
            <Button variation="primary">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

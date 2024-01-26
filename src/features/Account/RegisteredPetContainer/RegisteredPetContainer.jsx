// REACT & LIBRARIES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// STYLES
import "./RegisteredPetContainer.scss";

// FEATURES COMPONENTS
import { RegisteredPetGallery } from "../../index";

// UI COMPONENTS
import { Button } from "../../../ui";

function RegisteredPetContainer({ title, pets = [] }) {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setDisplayCount(currentCount => currentCount + 3);
  };

  const handleShowLess = () => {
    setDisplayCount(prevCount => Math.max(prevCount - 3, initialDisplayCount));
  };

  return (
    <div className="register-gray-container">
      <div className="register_main_content">
        <div className="register-header">
          <h4>{title}</h4>
          <button
            className="register-btnAdd"
            onClick={() => {
              navigate("/report");
              scrollTo(0, 0);
            }}
          >
            ADD <span style={{ fontSize: "2rem", fontWeight: "bold" }}>+</span>
          </button>
        </div>
      </div>

      <div className="register-middle-content">
        {pets.length > 0 ? (
          <RegisteredPetGallery pets={pets.slice(0, displayCount)} />
        ) : (
          <div>
            <h3 className="register-footer-text">No Entry</h3>
          </div>
        )}

        <div className="bottom-content">
          {pets.length > displayCount && (
            <Button variation="primary" size="small" onClick={handleShowMore}>
              SHOW MORE
            </Button>
          )}

          {
            // Show the "SHOW LESS" button if displayCount is greater than initialDisplayCount
            displayCount > initialDisplayCount && (
              <Button variation="primary" size="small" onClick={handleShowLess}>
                SHOW LESS
              </Button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default RegisteredPetContainer;

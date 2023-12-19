// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./PetsBanner.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button } from "../index";

function PetsBanner({ image, title, subtitle, bannerButton = true }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`pets-banner-container ${image}`}
    >
      <div className="pets-banner-content">
        <div className="pets-banner-text">
          <h1 className="pets-banner-title">{title}</h1>
          <p className="pets-banner-subtitle">{subtitle}</p>

          {bannerButton && (
            <Button
              variation="primary"
              icon={true}
              styles={{ padding: "2vh 2vw" }}
              onClick={() => navigate("/report")}
            >
              POST YOUR PET
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default PetsBanner;

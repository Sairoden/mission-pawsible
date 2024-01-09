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
    <div className="pet-banner">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`image ${image}`}
    >
    </motion.div>
    <div className="info">
        <div className="header">
          <h2 className="main">{title}</h2>
        </div>
        <div className="body">
          <h4 className="sub">{subtitle}</h4>
          <div className="btns">
            {bannerButton && (
              <Button
                variation="primary"
                icon={true}
                onClick={() => navigate("/report")}
              >
                POST YOUR PET
              </Button>
            )}
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default PetsBanner;

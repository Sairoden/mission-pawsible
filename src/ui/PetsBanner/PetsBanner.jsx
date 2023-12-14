// STYLES
import "./PetsBanner.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button } from "../index";

function PetsBanner({ image, title, subtitle, buttonText }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="pets-banner-container"
    >
      <img src={image} alt={`${title} banner`} className="pets-banner-image" />
      <div className="pets-banner-content">
        <div className="pets-banner-text">
          <h1 className="pets-banner-title">{title}</h1>
          <p className="pets-banner-subtitle">{subtitle}</p>

          <Button
            variation="primary"
            icon={true}
            styles={{ padding: "2rem 4rem" }}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default PetsBanner;

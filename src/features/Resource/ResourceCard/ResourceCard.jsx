/* eslint-disable no-constant-condition */

// STYLES
import "./ResourceCard.scss";
import { motion } from "framer-motion";

// UTILITIES
import { formatFullDate } from "../../../utils";

function ResourceCard({ index, title, author, description, date, image }) {
  return (
    // resource container
    // <div className="resources-middle-container">
      <motion.div
        initial={{
          opacity: 0,
          x: { index } % 2 === 0 ? 100 : -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
          },
        }}
        viewport={{ once: true }}
        className="resources-body-card"
      >
        {/* <div className="resources-body-card"> */}
          <div className="resources-body-card-image">
            <img
              src={
                image &&
                !image.includes("3D") &&
                !image.includes("s.webp") &&
                !image.includes("k.jpg")
                  ? image
                  : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
              }
              alt="resourcesImage"
              className="resources-body-card-image-content"
            />
          </div>
          <div className="resources-body-card-info">
            <div className="resources-body-card-info-header">
              <h3 className="resources-body-card-info--header-main">{title}</h3>
            </div>
            <div className="resources-body-card-info-body">
              <h4 className="resources-body-card-info-body-author">
                {author ? author : "No Author"}
              </h4>
              <h4 className="resources-body-card-info-body-date">{formatFullDate(date)}</h4>
              <p className="resources-body-card-info-body-text">{description}</p>
            </div>
          </div>
        {/* </div> */}
      </motion.div>
    // </div>
  );
}

export default ResourceCard;

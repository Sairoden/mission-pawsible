/* eslint-disable no-constant-condition */

// STYLES
import "./ResourceCard.scss";
import { motion } from "framer-motion";

// UTILITIES
import { formatFullDate } from "../../../utils";

function ResourceCard({ index, title, author, description, date, image }) {
  return (
    // resource container
    <div className="resources-middle-container">
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
        className="resources_detail_container"
      >
        <div className="resources-middle-content">
          <div className="resources-image">
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
              className="resources-image-content"
            />
          </div>
          <div className="resources-detail-content">
            <h3 className="resources-detail-header">{title}</h3>
            <div className="resource-author-container">
              <h4 className="resources-author-text">
                {author ? author : "No Author"}
              </h4>
              <h4 className="resources-date-text">{formatFullDate(date)}</h4>
            </div>
            <p className="resource-span-text">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResourceCard;

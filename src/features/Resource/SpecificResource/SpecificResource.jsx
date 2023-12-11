import "./SpecificResource.scss";
import { motion } from "framer-motion";

function SpecificResource() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="detail-container"
    >
      <div className="detail-header">
        <h1 className="detail-header-text">
          What is a Pomeranian? How to Identify Pomeranian Dogs
        </h1>
        <div className="header-span">
          <p className="span_name">Jaime Lannister</p>
          <p className="span_date">December 1, 2000</p>
        </div>
      </div>
      <div className="detail-img">
        <img src="/public/resource-dog.png" alt="resourcesImage" width={500} />
      </div>
      <div className="detail-text">
        <p className="detail-footer-span">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="detail-footer-span">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </motion.div>
  );
}

export default SpecificResource;

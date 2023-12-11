import React from "react";
import "./Resources.scss";
import { motion } from "framer-motion";

function Resources() {
  return (
    <div className="resources_container">
      <div className="resources_header">
        <h1 className="resources_header_text">Resources</h1>
      </div>
      <div className="resources-middle-container">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          transition={{ duration: 1, origin: 1 }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img
                src="/public/resource-dog.png"
                alt="resourcesImage"
                width={210}
              />
            </div>
            <div className="resources-detail-content">
              <h2 className="resources-detail-header">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h2>
              <div className="resource-author-container">
                <h3 className="resources-author-text">Jaime Lannister</h3>
                <h3 className="resources-date-text">December 01, 2020</h3>
              </div>
              <p className="resource-span-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "-0%" }}
          transition={{ duration: 1, origin: 1 }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img
                src="/public/resource-dog.png"
                alt="resourcesImage"
                width={210}
              />
            </div>
            <div className="resources-detail-content">
              <h2 className="resources-detail-header">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h2>
              <div className="resource-author-container">
                <h3 className="resources-author-text">Jaime Lannister</h3>
                <h3 className="resources-date-text">December 01, 2020</h3>
              </div>
              <p className="resource-span-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          transition={{ duration: 1, origin: 1 }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img
                src="/public/resource-dog.png"
                alt="resourcesImage"
                width={210}
              />
            </div>
            <div className="resources-detail-content">
              <h2 className="resources-detail-header">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h2>
              <div className="resource-author-container">
                <h3 className="resources-author-text">Jaime Lannister</h3>
                <h3 className="resources-date-text">December 01, 2020</h3>
              </div>
              <p className="resource-span-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="resources_footer"></div>
    </div>
  );
}

export default Resources;

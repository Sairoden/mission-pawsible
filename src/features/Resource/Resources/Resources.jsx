// STYLES
import "./Resources.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Pagination } from "../../../ui";

function Resources() {
  return (
    <div className="resources_container">
      <div className="resources_header">
        <h1 className="resources_header_text">Resources</h1>
      </div>

      <div className="resources-middle-container">
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            // eslint-disable-next-line no-constant-condition
            x: 1 % 2 === 0 ? 100 : -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1.5, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img src="/resource.png" alt="resourcesImage" width={250} />
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
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            // eslint-disable-next-line no-constant-condition
            x: 2 % 2 === 0 ? 100 : -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1.5, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img src="/resource.png" alt="resourcesImage" width={250} />
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
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            // eslint-disable-next-line no-constant-condition
            x: 3 % 2 === 0 ? 100 : -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1.5, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="resources_detail_container"
        >
          <div className="resources-middle-content">
            <div className="resources-image">
              <img src="/resource.png" alt="resourcesImage" width={250} />
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

      <Pagination total={80} />
    </div>
  );
}

export default Resources;

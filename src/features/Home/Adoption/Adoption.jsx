// STYLES
import "./Adoption.scss";
import { motion } from "framer-motion";

// ASSETS
import adopt1 from "../../../assets/adopt1.png";
import adopt2 from "../../../assets/adopt2.png";
import adopt3 from "../../../assets/adopt3.png";
import adopt4 from "../../../assets/adopt4.png";

function Adoption() {
  return (
    <div className="adoption-container">
      <div className="adoption-header">
        <h2 className="adoption-header-text">Adopt a Pet </h2>
      </div>
      <div className="adoption-detail-container">
        <h5 className="adoption-detail-text">
          Find your perfect furry companion. Explore pet adoption <br />
          opportunities now!
        </h5>
      </div>

      <div className="adoption-img-container">
        <motion.div
          initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          className="adoption-img-content"
        >
          <a href="https://www.caraphil.org/" target="_blank" rel="noreferrer">
            <img
              src={adopt1}
              alt="caraphil"
              width="150vw"
              className="adoption-image"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          className="adoption-img-content"
        >
          <a
            href="http://www.philanimalrescue.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={adopt2}
              alt="phil-animal-rescue"
              width="150vw"
              className="adoption-image"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
          transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          className="adoption-img-content"
        >
          <a href="https://akf.org.ph/" target="_blank" rel="noreferrer">
            <img
              src={adopt3}
              alt="pawssion-project"
              width="150vw"
              className="adoption-image"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          className="adoption-img-content"
        >
          <a
            href="https://pawssionproject.org.ph/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={adopt4}
              alt="pawssion-project"
              width="300vw"
              className="adoption-image"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Adoption;

// STYLES
import "./Michopchip.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import microchips from "../../../assets/microchips.png";

function Microchip() {
  return (
    <motion.div
      className="microchip-container"
      initial={{
        opacity: 0,
        y: 100,
        filter: "blur(5px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <img
          src={microchips}
          alt="Person with a dog"
          className="microchip-img"
        />
      </div>
      <div className="microchip-detail-container">
        <div>
          <h2 className="microchip-title">Secure their Return</h2>
        </div>
        <div>
          <h6 className="microchip-subtitle">
            Microchip Your Beloved Pet Today!
          </h6>
        </div>
        <div>
          <p className="microchip-text">
            Protect your furry friend by getting them microchipped today. <br />
            This simple procedure can significantly increase the chances of
            being reunited <br /> if they ever get lost. Act now to ensure their
            safety and give yourself peace of mind.
          </p>
        </div>
        <div className="microchip-btn">
          <a
            href="https://www.youtube.com/watch?v=dp0Dpe6AwgI"
            target="_blank"
            rel="noreferrer"
          >
            <Button variation="primary" icon={true} size="small">
              View Intro
            </Button>
          </a>

          <a href="https://petdentity.com.ph" target="_blank" rel="noreferrer">
            <Button variation="secondary" size="small">
              Explore Now
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Microchip;

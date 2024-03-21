// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./Landing.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import landing from "../../../assets/landing.png";

// HOOKS
import { useGetCurrentUser } from "../../../hooks";

function Landing() {
  const navigate = useNavigate();
  const { user } = useGetCurrentUser();

  return (
    <section className="landing container">
      <motion.div
        className="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        <div className="header">
          <h1>
            Make a <span>Pawsitive</span> Change
          </h1>
        </div>

        <div className="body">
          <h4>
            Help bring every paw back home! Start your search now, your furry
            friends can’t wait to see you!
          </h4>
        </div>

        <div className="btns">
          <Button
            variation="primary"
            icon={true}
            size="small"
            onClick={() => {
              navigate("/lost-pets");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            Find Pets
          </Button>

          <Button
            variation="secondary"
            size="medium"
            onClick={() => {
              navigate(`${!user ? "/signup" : "/resources"}`);
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            {!user ? " Join Us  " : "Resources"}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="img"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div>
          <img
            src={landing}
            alt="Pet reunion"
            className="landing-image-gallery"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Landing;

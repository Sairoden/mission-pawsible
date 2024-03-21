// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./Stats.scss";
import { motion } from "framer-motion";

// UI COMPONENTS
import { Button } from "../../../ui";

// HOOKS
import {
  useGetLostPets,
  useGetFoundPets,
  useGetReunitedPets,
  useGetCurrentUser,
} from "../../../hooks";

function Stats() {
  const { user } = useGetCurrentUser();

  const { lostPets } = useGetLostPets();
  const { foundPets } = useGetFoundPets();
  const { reunitedPets } = useGetReunitedPets();

  const navigate = useNavigate();

  return (
    <div className="stats-container">
      <div className="stats-content">
        <div className="stats-header-text">
          <h1 className="stats-one"> One </h1>
          <h1 className="stats-many"> Many </h1>
        </div>

        <div>
          <div className="stats-circle-card">
            <motion.div
              className="stats-circle1"
              initial={{ y: 300, opacity: 0, filter: "blur(5px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h2 className="stats-circle-number"> {lostPets?.length || 0} </h2>
              <br />
              <span className="stats-circle-text"> Missing Pets </span>
            </motion.div>

            <motion.div
              className="stats-circle2"
              initial={{ y: 300, opacity: 0, filter: "blur(5px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0)" }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h2 className="stats-circle-number"> {foundPets?.length || 0}</h2>{" "}
              <br />
              <span className="stats-circle-text"> Found Pets </span>
            </motion.div>

            <motion.div
              className="stats-circle3"
              initial={{ y: 300, opacity: 0, filter: "blur(5px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0)" }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h2 className="stats-circle-number">
                {reunitedPets?.length || 0}
              </h2>
              <br />
              <span className="stats-circle-text"> Reunited Pets </span>
            </motion.div>
          </div>
          <hr className="stats-line" />
        </div>

        <div className="stats-footer">
          <span className="stats-footer-text">
            {!user
              ? "Join the community to reunite missing pets with their families"
              : "Explore our mission and join us in bringing pets and families together"}
          </span>

          <Button
            variation="primary"
            size="small"
            onClick={() => {
              navigate(`${!user ? "/signup" : "/about-us"}`);
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            {!user ? "Sign up now!" : "Learn About Us!"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Stats;

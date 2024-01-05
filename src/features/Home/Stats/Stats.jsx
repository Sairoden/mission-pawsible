// STYLES
import "./Stats.scss";
import { NavLink } from "react-router-dom";
// UI COMPONENTS
import { Button } from "../../../ui";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-content">
        <div className="stats-header-text">
          <h1 className="stats-one"> One </h1>{" "}
          <h1 className="stats-many"> Many </h1>{" "}
        </div>{" "}
        <div>
          <div className="stats-circle-card">
            <div className="stats-circle1">
              <h2 className="stats-circle-number"> 285 </h2> <br />
              <span className="stats-circle-text"> Missing Pets </span>{" "}
            </div>{" "}
            <div className="stats-circle2">
              <h2 className="stats-circle-number"> 285 </h2> <br />
              <span className="stats-circle-text"> Found Pets </span>{" "}
            </div>{" "}
            <div className="stats-circle3">
              <h2 className="stats-circle-number"> 285 </h2> <br />
              <span className="stats-circle-text"> Reunited Pets </span>{" "}
            </div>{" "}
          </div>{" "}
          <hr className="stats-line" />
        </div>{" "}
        <div className="stats-footer">
          <span>
            Join the community of pet owners to reunite missing pets with their
            families{" "}
          </span>{" "}
          <NavLink to="/signup">
            <Button variation="primary"> Sign up now! </Button>{" "}
          </NavLink>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Stats;

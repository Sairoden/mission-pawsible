// STYLES
import "./Michopchip.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

function Microchip() {
  return (
    <div className="microchip">
      <div className="img">
        <img src="/img-microchipped.png" alt="Person with a dog" />
      </div>

      <div className="info">
        <div className="header">
          <h2 className="main">Secure their Return</h2>
          <h6 className="sub">Microchip Your Beloved Pet Today!</h6>
        </div>

        <div className="body">
          <p className="text">
            Protect your furry friend with peace of mind. Get them microchipped
            today and increase their chances of being reunited if lost. Act now
            and ensure their safety.
          </p>

          <div className="btns">
            <Button variation="primary" icon={true}> View Intro </Button>

            <Button variation="secondary"> Explore Now </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Microchip;

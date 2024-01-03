// STYLES
import "./Michopchip.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import microchips from "../../../assets/microchips.png";

function Microchip() {
  return (
    <div className="microchip-container">
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
          <Button variation="primary" icon={true}>
            View Intro
          </Button>
          <Button variation="secondary">Explore Now</Button>
        </div>
      </div>
    </div>

    // <div className="microchip">
    //   <div className="img">
    //     <img src="/img-microchipped.png" alt="Person with a dog" />
    //   </div>

    //   <div className="info">
    //     <div className="header">
    //       <h2 className="main">Secure their Return</h2>
    //       <h6 className="sub">Microchip Your Beloved Pet Today!</h6>
    //     </div>

    //     <div className="body">
    //       <p className="text">
    //         Protect your furry friend with peace of mind. Get them microchipped
    //         today and increase their chances of being reunited if lost. Act now
    //         and ensure their safety.
    //       </p>

    //       <div className="btns">
    //         <Button variation="primary" icon={true}> View Intro </Button>

    //         <Button variation="secondary"> Explore Now </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Microchip;

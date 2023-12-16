// STYLES
import "./StatsCard.scss";

function StatsCard({ number, text, image }) {
  return (
    <div className="card">
      <div className="stats">
        <div className="header">
          <h3>{number}</h3>
        </div>
        <div className="body">
          <h6>{text}</h6>
        </div>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default StatsCard;

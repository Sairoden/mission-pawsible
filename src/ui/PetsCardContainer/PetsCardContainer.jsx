// STYLES
import "./PetsCardContainer.scss";

function PetsCardContainer({ total, children }) {
  return (
    <div className="gallery-card">
      <div className="header">
        <h3>TOTAL: {total}</h3>
      </div>

      <div className="grid">{children}</div>
    </div>
  );
}

export default PetsCardContainer;

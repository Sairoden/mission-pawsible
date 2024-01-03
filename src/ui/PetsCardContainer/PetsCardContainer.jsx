// STYLES
import "./PetsCardContainer.scss";

function PetsCardContainer({ total, children }) {
  return (
    <div className="gallery-card">
      <div className="header">
        <h2>TOTAL: {total}</h2>
      </div>

      <div className="grid">{children}</div>
    </div>
  );
}

export default PetsCardContainer;

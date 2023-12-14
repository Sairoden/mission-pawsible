// STYLES
import "./PetsCards.scss";

function PetsCards({ total, children }) {
  return (
    <div className="pets-cards-container">
      <h1 className="pets-cards-header">TOTAL: {total}</h1>

      <div className="pets-cards-grid">{children}</div>
    </div>
  );
}

export default PetsCards;

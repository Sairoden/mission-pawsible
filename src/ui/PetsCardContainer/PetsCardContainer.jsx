// STYLES
import "./PetsCardContainer.scss";
import "../Input/Input.scss";

function PetsCardContainer({ total, children, setSearchPetName }) {
  const delaySubmission = e => {
    let timeout;

    const { value } = e.target;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setSearchPetName(value.toLowerCase());
    }, 0);
  };

  return (
    <div className="gallery-card">
      <div className="header">
        <h2>TOTAL: {total}</h2>

        <div className="input-container">
          <input
            type="search"
            className="input-textbox"
            id="search"
            placeholder="Search for name"
            onChange={e => delaySubmission(e)}
          />
        </div>
      </div>

      <div className="grid">{children}</div>
    </div>
  );
}

export default PetsCardContainer;

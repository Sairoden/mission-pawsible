// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./PetsCardContainer.scss";
import "../Input/Input.scss";

function PetsCardContainer({ total, children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const delaySubmission = e => {
    let timeout;

    const { value } = e.target;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      searchParams.set("search", value.toLowerCase());
      setSearchParams(searchParams);
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

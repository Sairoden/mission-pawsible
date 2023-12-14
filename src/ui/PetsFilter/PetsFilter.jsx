// STYLES
import "./PetsFilter.scss";

function PetsFilter() {
  return (
    <form className="pets-filter-container">
      <h1 className="pets-filter-header">FILTER</h1>

      {/* SPECIES */}
      <div className="pets-filter-details">
        <p className="pets-filter-details-title">Species</p>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="cat"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="cat" className="pets-filter-detail-label">
            Cat
          </label>
        </div>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="dog"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="dog" className="pets-filter-detail-label">
            Dog
          </label>
        </div>

        <div className="pets-filter-detail-line" />
      </div>

      {/* GENDER */}
      <div className="pets-filter-details">
        <p className="pets-filter-details-title">Gender</p>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="male"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="male" className="pets-filter-detail-label">
            Male
          </label>
        </div>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="female"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="female" className="pets-filter-detail-label">
            Female
          </label>
        </div>

        <div className="pets-filter-detail-line" />
      </div>

      {/* SIZE */}
      <div className="pets-filter-details">
        <p className="pets-filter-details-title">Size</p>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="small"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="small" className="pets-filter-detail-label">
            Small
          </label>
        </div>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="medium"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="medium" className="pets-filter-detail-label">
            Medium
          </label>
        </div>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="large"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="large" className="pets-filter-detail-label">
            Large
          </label>
        </div>

        <div className="pets-filter-detail-line" />
      </div>

      {/* LOCATION */}
      <div className="pets-filter-details">
        <p className="pets-filter-details-title">Location</p>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="manila"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="manila" className="pets-filter-detail-label">
            Manila
          </label>
        </div>

        <div className="pets-filter-detail">
          <input
            type="checkbox"
            id="quezon"
            className="pets-filter-detail-checkbox"
          />
          <label htmlFor="quezon" className="pets-filter-detail-label">
            Quezon City
          </label>
        </div>
      </div>
    </form>
  );
}

export default PetsFilter;

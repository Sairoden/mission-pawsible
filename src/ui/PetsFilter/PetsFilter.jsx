// STYLES
import "./PetsFilter.scss";

function PetsFilter() {
  return (
    <div className="pet-filter">
      <form className="filter-form">
        <input type="checkbox" class="toggler" />
        <div className="header">
          <h2 className="click">FILTER</h2>
        </div>
      
        <div className="body">
          {/* SPECIES */}
          <div className="species">
            <h4 className="main">Species</h4>

            <div className="choices">
              <input
                type="checkbox"
                id="cat"
                className="checkbox"
              />
              <label htmlFor="cat" className="label">
                Cat
              </label>
            </div>

            <div className="choices">
              <input
                type="checkbox"
                id="dog"
                className="checkbox"
              />
              <label htmlFor="dog" className="label">
                Dog
              </label>
            </div>
          </div>

        {/* GENDER */}
        <div className="gender">
          <h4 className="main">Gender</h4>

          <div className="choices">
            <input
              type="checkbox"
              id="male"
              className="checkbox"
            />
            <label htmlFor="male" className="label">
              Male
            </label>
          </div>

          <div className="choices">
            <input
              type="checkbox"
              id="female"
              className="checkbox"
            />
            <label htmlFor="female" className="label">
              Female
            </label>
          </div>
        </div>

        {/* SIZE */}
        <div className="size">
          <h4 className="main">Size</h4>

          <div className="choices">
            <input
              type="checkbox"
              id="small"
              className="checkbox"
            />
            <label htmlFor="small" className="label">
              Small
            </label>
          </div>

          <div className="choice">
            <input
              type="checkbox"
              id="medium"
              className="checkbox"
            />
            <label htmlFor="medium" className="label">
              Medium
            </label>
          </div>

          <div className="choice">
            <input
              type="checkbox"
              id="large"
              className="checkbox"
            />
            <label htmlFor="large" className="label">
              Large
            </label>
          </div>
        </div>

        {/* LOCATION */}
        <div className="location">
          <h4 className="main">Location</h4>

          <div className="choices">
            <input
              type="checkbox"
              id="manila"
              className="checkbox"
            />
            <label htmlFor="manila" className="label">
              Manila
            </label>
          </div>

          <div className="choices">
            <input
              type="checkbox"
              id="quezon"
              className="checkbox"
            />
            <label htmlFor="quezon" className="label">
              Quezon City
            </label>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default PetsFilter;

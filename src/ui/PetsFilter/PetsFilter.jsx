// STYLES
import "./PetsFilter.scss";
  
function PetsFilter({ setPetTypes, setGenders, setSizes, setLocations }) {
  const handleFilter = e => {
    const { name, value, checked } = e.target;

    switch (name) {
      case "petType": {
        if (checked) setPetTypes(prevPetTypes => [...prevPetTypes, value]);
        else
          setPetTypes(prevPetTypes =>
            prevPetTypes.filter(petType => petType !== value)
          );

        break;
      }

      case "gender": {
        if (checked) setGenders(prevGenders => [...prevGenders, value]);
        else
          setGenders(prevGenders =>
            prevGenders.filter(gender => gender !== value)
          );

        break;
      }

      case "size": {
        if (checked) setSizes(prevSizes => [...prevSizes, value]);
        else setSizes(prevSizes => prevSizes.filter(size => size !== value));

        break;
      }

      case "location": {
        if (checked) setLocations(prevLocations => [...prevLocations, value]);
        else
          setLocations(prevLocations =>
            prevLocations.filter(location => location !== value)
          );

        break;
      }

      default:
        return;
    }
  };

  return (
    <div className="pet-filter">
      <form className="filter-form">
        <input type="checkbox" className="toggler" />
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
                value="Cat"
                name="petType"
                onChange={handleFilter}
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
                value="Dog"
                name="petType"
                onChange={handleFilter}
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
                value="Male"
                name="gender"
                onChange={handleFilter}
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
                value="Female"
                name="gender"
                onChange={handleFilter}
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
                value="Small"
                name="size"
                onChange={handleFilter}
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
                value="Medium"
                name="size"
                onChange={handleFilter}
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
                value="Large"
                name="size"
                onChange={handleFilter}
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
                value="Manila"
                name="location"
                onChange={handleFilter}
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
                value="Quezon"
                name="location"
                onChange={handleFilter}
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

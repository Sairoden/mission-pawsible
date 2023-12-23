// STYLES
import "./Adoption.scss";

// ASSETS
import adopt1 from "../../../assets/adopt1.png";
import adopt2 from "../../../assets/adopt2.png";
import adopt3 from "../../../assets/adopt3.png";
import adopt4 from "../../../assets/adopt4.png";

function Adoption() {
  return (
    <div className="adoption-container">
      <div className="adoption-header">
        <h2 className="adoption-header-text">Adopt a Pet </h2>
      </div>
      <div className="adoption-detail-container">
        <h5 className="adoption-detail-text">
          Find your perfect furry companion. Explore pet adoption <br />
          opportunities now!
        </h5>
      </div>
      <div className="adoption-img">
        <div className="adoption-img-content">
          <a href="https://www.caraphil.org/" target="_blank" rel="noreferrer">
            <img src={adopt1} alt="caraphil" width="150vw" />
          </a>
        </div>

        <div className="adoption-img-content">
          <a
            href="http://www.philanimalrescue.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={adopt2} alt="phil-animal-rescue" width="150vw" />
          </a>
        </div>

        <div className="adoption-img-content">
          <a href="https://akf.org.ph/" target="_blank" rel="noreferrer">
            <img src={adopt3} alt="pawssion-project" width="150vw" />
          </a>
        </div>

        <div className="adoption-img-content">
          <a
            href="https://pawssionproject.org.ph/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={adopt4} alt="pawssion-project" width="300vw" />
          </a>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="title">
    //     <h2>Adopt a Pet</h2>
    //   </div>

    //   <div className="adoption">
    //     <div className="header">
    //       <h5>
    //         Find your perfect furry companion.Explore pet adoption <br />
    //         opportunities now!
    //       </h5>
    //     </div>

    //     <div className="body">
    //       <a href="https://www.caraphil.org/" className="adopt-link">
    //         <img src="/img-cara.png" alt="caraphil" />
    //       </a>

    //       <a href="http://www.philanimalrescue.org/" className="adopt-link">
    //         <img src="/img-part.png" alt="phil-animal-rescue" />
    //       </a>

    //       <a href="https://pawssionproject.org.ph/" className="adopt-link">
    //         <img src="/img-pawssion.png" alt="pawssion-project" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Adoption;

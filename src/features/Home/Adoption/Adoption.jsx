// STYLES
import "./Adoption.scss";

function Adoption() {
  return (
    <div className="adoption-container">
      <div className="adoption-header">
        <h2 className="adoption-header-text">Adopt a Pet </h2>
      </div>
      <div className="adoption-detail-container">
        <h5 className="adoption-detail-text">
          {" "}
          Find your perfect furry companion.Explore pet adoption <br />
          opportunities now!
        </h5>
      </div>
      <div className="adoption-img">
        <div className="adoption-img-content">
          <a href="https://www.caraphil.org/">
            <img src="/img-cara.png" alt="caraphil" width="150vw" />
          </a>
        </div>
        <div className="adoption-img-content">
          <a href="http://www.philanimalrescue.org/">
            <img src="/img-part.png" alt="phil-animal-rescue" width="150vw" />
          </a>
        </div>
        <div className="adoption-img-content">
          <a href="https://pawssionproject.org.ph/">
            <img src="/img-pawssion.png" alt="pawssion-project" width="300vw" />
          </a>
        </div>
        <div className="adoption-img-content">
          <a href="https://pawssionproject.org.ph/">
            <img src="/img-pawssion.png" alt="pawssion-project" width="300vw" />
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

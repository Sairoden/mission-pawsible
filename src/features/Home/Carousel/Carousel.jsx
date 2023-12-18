// STYLES
import "./Carousel.scss";

// ASSETS
import Carousel1 from "../../../assets/carousel-slide-1.png";
import Carousel2 from "../../../assets/carousel-slide-2.png";
import Carousel3 from "../../../assets/carousel-slide-3.png";

function Carousel() {
  return (
    <section className="carousel">
      <div className="info">
        <div className="header">
          <h2>Recent Listing</h2>
        </div>
        <div className="body">
          <h5>
            Help bring a paw back home! Start your search now, your furry
            friends can’t wait to see you!
          </h5>
        </div>
        <div className="btns">
          <div className="button bg-orange">
            <h5>Join Us</h5>
          </div>
        </div>
      </div>
      <div className="slider" id="slider">
        <img src={Carousel1} alt="carousel dog 1" />
        <img src={Carousel2} alt="carousel dog 2" />
        <img src={Carousel3} alt="carousel dog 3" />
        <img src={Carousel1} alt="carousel dog 1" />
      </div>
    </section>
  );
}

export default Carousel;

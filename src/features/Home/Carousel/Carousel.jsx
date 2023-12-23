// STYLES
import "./Carousel.scss";
import { Button } from "../../../ui";

// ASSETS
import Carousel1 from "../../../assets/carousel-slide-1.png";
import Carousel2 from "../../../assets/carousel-slide-2.png";
import Carousel3 from "../../../assets/carousel-slide-3.png";
import Carousel4 from "../../../assets/carousel-slide-4.png";
import ImageGallery from "react-image-gallery";

function Carousel() {
  const imageSlides = [
    {
      original: Carousel1,
    },
    {
      original: Carousel2,
    },
    {
      original: Carousel3,
    },
    {
      original: Carousel4,
    },
  ];

  return (
    <section className="carousel">
      <div className="info">
        <div className="header">
          <h1 className="header-title">Recent Listings</h1>
        </div>
        <div className="body">
          <h5 className="body-text">
            Help bring every paw back home! Start your search <br />
            now, your furry friends can’t wait to see you!
          </h5>
        </div>
        <div className="btns">
          <Button
            variation="primary"
            icon={true}
            styles={{ padding: "2vh 2vw" }}
          >
            Check Out
          </Button>
        </div>
      </div>
      <ImageGallery
        items={imageSlides}
        infinite={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
        useTranslate3D={true}
        disableSwipe={false}
        slideDuration={5000}
        showNav={false}
        showThumbnails={false}
        showBullets={true}
        showPlayButton={false}
        autoPlay={true}
      />
    </section>
  );
}

export default Carousel;

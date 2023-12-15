// STYLES
import "./PetDetails.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function PetDetails() {
  const imageSlides = [
    {
      original: "/fakePet.png",
      thumbnail: "/fakePet.png",
    },
    {
      original: "/shitsu.png",
      thumbnail: "/shitsu.png",
    },
    {
      original: "/fakePet.png",
      thumbnail: "/fakePet.png",
    },
  ];

  return (
    <div className="pet-details-container">
      <h1>HELLO NUCUM</h1>
      <ImageGallery items={imageSlides} showPlayButton={false} />;
    </div>
  );
}

export default PetDetails;

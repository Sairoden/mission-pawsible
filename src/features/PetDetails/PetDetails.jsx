// STYLES
import "./PetDetails.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

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
    <div>
      <div className="petdetail-main-container">
        <div className="left-content">
          <div>
            <img src="/public/resource.png" alt="petdetail dog" width="380px" />
          </div>
          <div className="social-icon">
            <IoShareSocialOutline style={{ height: 25, width: 25 }} />
            <FaFacebook style={{ height: 25, width: 25 }} />
            <RiTwitterXFill style={{ height: 25, width: 25 }} />
            <FaInstagram style={{ height: 25, width: 25 }} />
          </div>
        </div>
        <div className="petdetail-right-content">
          <div className="petdetail-right-header">
            <h2>Shiba Inu Sepia</h2>
            <button className="chat-btn">Chat with the person</button>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Gender</h4>
            </div>
            <div>
              <h4>: Female</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Type</h4>
            </div>
            <div>
              <h4>: Dog</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Size</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: Small</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Color</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: Black</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Microchipped</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: Yes</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Description</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: Has red collar</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Message</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">Help us to find</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Date Last Seen</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: January 1, 2020</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-h4">Location Last Seen</h4>
            </div>
            <div>
              <h4 className="petdetail-right-h4">: Kamuning rd Quezon City</h4>
            </div>
          </div>
        </div>

        <div className="petdetail-footer-middle">
          <h1>HELLO NUCUM</h1>
          <ImageGallery items={imageSlides} showPlayButton={false} />;
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
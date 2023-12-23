// STYLES
import "./PetDetails.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { motion } from "framer-motion";

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
      <motion.div className="petdetail-main-container">
        <div className="petdetail-left-content" height="100%">
          <div>
            <ImageGallery items={imageSlides} showPlayButton={false} />
          </div>
          <div className="petdetail-social-icon">
            <div className="share-icon">
              <IoShareSocialOutline className="left-share-icon" />: Share
            </div>

            <a href="fb-link">
              <FaFacebook className="left-social-icon" />
            </a>
            <a href="twitter-link">
              <RiTwitterXFill className="left-social-icon" />
            </a>
            <a href="instagram-link">
              <FaInstagram className="left-social-icon" />
            </a>
          </div>
        </div>

        <div className="petdetail-right-content">
          <div className="petdetail-right-header">
            <h2 className="petdetail-right-header-title">Shiba Inu Sepia</h2>

            <button className="petdetail-chat-btn">
              <IoChatboxEllipsesOutline className="chat-icon" />
              Chat with the person
            </button>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Gender</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Female</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Type</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Dog</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Size</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Small</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Color</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Black</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Microchipped</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Yes</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Description</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">: Has red collar</h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Message</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">
                : Help us to find
              </h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">Date Last Seen</h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">
                : January 1, 2020
              </h4>
            </div>
          </div>

          <div className="petdetail-right-details">
            <div>
              <h4 className="petdetail-right-details-text">
                Location Last Seen
              </h4>
            </div>
            <div>
              <h4 className="petdetail-right-details-text">
                : Kamuning rd Quezon City
              </h4>
            </div>
          </div>
        </div>

        <div className="petdetail-footer-middle">
          <img
            src="/public/petdetailmap.png"
            alt="map"
            className="petdetail-footer-img"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default PetDetails;

// UI COMPONENTS
import { Spinner, Map } from "../../ui";

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

// HOOKS
import { useGetSinglePet } from "../../hooks";
import { formatFullDate } from "../../utils";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function PetDetails() {
  const { pet, isPending } = useGetSinglePet();

  if (isPending) return <Spinner />;
  const {
    petName,
    petType,
    breed,
    color,
    size,
    gender,
    location,
    date,
    microchipped,
    description,
    message,
    images,
    lat,
    lng,
    status,
  } = pet;

  const imageSlides = images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="petdetail-main-container">
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
          <h2 className="petdetail-right-header-title">
            {petName} ⭐ {breed}
          </h2>

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
            <h4 className="petdetail-right-details-text">: {gender}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Type</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {petType}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Size</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {size}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Color</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {color}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Microchipped</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {microchipped}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Description</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {description}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Message</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {message}</h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Date Last Seen</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">
              : {formatFullDate(date)}
            </h4>
          </div>
        </div>

        <div className="petdetail-right-details">
          <div>
            <h4 className="petdetail-right-details-text">Location Last Seen</h4>
          </div>
          <div>
            <h4 className="petdetail-right-details-text">: {location}</h4>
          </div>
        </div>
      </div>

      <div className="petdetail-footer-middle">
        <Map center={[lat, lng]} location={location} zoom={18} />
      </div>
    </div>
  );
}

export default PetDetails;

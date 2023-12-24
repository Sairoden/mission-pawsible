// REACT & LIBRARIES
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// STYLES
import "./SpecificResource.scss";
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

// UI COMPONENTS
import { Spinner } from "../../../ui";

// HOOKS
import { useGetResources } from "../../../hooks";

// UTILITIES
import { formatFullDate } from "../../../utils";

function SpecificResource() {
  const { resources, isPending } = useGetResources();
  const { resourceId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const resource = resources?.filter(
      resource => resource.article_id === resourceId
    );

    if (!resource) return navigate("/resources");

    console.log(resource);

    setLink(resource[0].link);
    setTitle(resource[0].title);
    setAuthor(resource[0].creator);
    setContent(resource[0].content);
    setDate(resource[0].pubDate);
    setImage(resource[0].image_url);
  }, [navigate, resources, resourceId]);

  if (isPending) return <Spinner />;

  console.log(author);

  return (
    <div className="detail-container">
      <div className="detail-header">
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className="detail-header-text">{title}</h1>
        </a>
        <div className="header-span">
          <p className="span_name">{author ? author : "No Author"}</p>
          <p className="span_date">{formatFullDate(date)}</p>
          <div className="resource-social-media">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="social-media" />
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <RiTwitterXFill className="social-media" />
            </a>
          </div>
        </div>
      </div>
      <div className="detail-img">
        <img
          src={
            image &&
            !image.includes("3D") &&
            !image.includes("s.webp") &&
            !image.includes("k.jpg")
              ? image
              : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
          }
          alt="resourceImage"
          width={600}
        />
      </div>
      <div className="detail-text">
        <p className="detail-footer-span">{content}</p>
      </div>
    </div>
  );
}

export default SpecificResource;

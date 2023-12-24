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

  useEffect(() => {
    const resource = resources?.filter(
      resource => resource.article_id === resourceId
    );

    if (!resource) return navigate("/resources");

    setTitle(resource[0].title);
    setAuthor(resource[0].author);
    setContent(resource[0].content);
    setDate(resource[0].pubDate);
    setImage(resource[0].image_url);
  }, [navigate, resources, resourceId]);

  if (isPending) return <Spinner />;

  return (
    <div className="detail-container">
      <div className="detail-header">
        <h1 className="detail-header-text">{title}</h1>
        <div className="header-span">
          <p className="span_name">{author}</p>
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
        <img src={image} alt="resourcesImage" width={600} />
      </div>
      <div className="detail-text">
        <p className="detail-footer-span">{content}</p>
      </div>
    </div>
  );
}

export default SpecificResource;

// STYLES
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div id="error" className="sixteen columns clearfix">
        <div id="error-monster-1" className="five columns alpha">
          <img
            loading="lazy"
            id="error-monster-2"
            src="https://res.cloudinary.com/diulw3d0x/image/upload/v1470132495/m2_mbkiiv.png"
            alt="Error Monster 1"
          />
        </div>
        <div className="eleven columns omega">
          <h1>Sorry, this content is not available.</h1>
          <img
            loading="lazy"
            id="error-monster-3"
            src="https://res.cloudinary.com/diulw3d0x/image/upload/v1470132495/m3_jic9um.png"
            alt="Error Monster 3"
          />
          <img
            loading="lazy"
            id="error-monster-4"
            src="https://res.cloudinary.com/diulw3d0x/image/upload/v1470132495/m4_du23cx.png"
            alt="Error Monster 4"
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

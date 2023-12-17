// STYLES
import "./Carousel.scss";

function Carousel() {
  return (
    <section className="carousel">
    <div className="info">
        <div className="header">
            <h2>Recent Listing</h2>
        </div>
        <div className="body">
            <h5>Help bring a paw back home! Start your search now, your furry friends can’t wait to see you!</h5>
        </div>
        <div className="btns">
            <div className="button bg-orange">
                <h5>Join Us</h5>
            </div>
        </div>
    </div>
    <div className="slider" id="slider">
        <img src="./public/img-slider1.png" alt="" />
        <img src="./public/img-slider2.png" alt="" />
        <img src="./public/img-slider3.png" alt="" />
        <img src="./public/img-slider1.png" alt="" />
    </div>
</section>
); 
}

export default Carousel;

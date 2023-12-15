// STYLES
import "./Showcase.scss";

// FEATURES COMPONENTS
import { FeaturedStory, Adoption, Microchip } from "../../index";

function Showcase() {
  return (
    <section className="showcase">
      <FeaturedStory />

      <Adoption />

      <Microchip />
    </section>
  );
}

export default Showcase;

// STYLES
import "./Stats.scss";

// UI COMPONENTS
import { StatsCard } from "../../../ui";

function Stats() {
  return (
    <div>
      <div className="img-paw"></div>
      <section className="statistic">
        <div className="container">
          <StatsCard number="100" text="MISSING PETS" image="/img-paw.png" />
          <StatsCard number="100" text="FOUND PETS" image="/img-paw.png" />
          <StatsCard number="100" text="REUNITED PETS" image="/img-paw.png" />
        </div>
      </section>
    </div>
  );
}

export default Stats;

// STYLES
import "./Other.scss";

function Other() {
  return (
    <section className="other">
      <div className="container">
        <div className="title">
          <h2>Featured Story</h2>
        </div>
        <div className="story">
          <div className="img">
            <img src="/img-story.png" alt="" />
          </div>
          <div className="info">
            <div className="header">
              <h6 className="sub">May 8, 2023</h6>
              <h4 className="main">A Bark Away: The Journey of Max's Return</h4>
            </div>
            <div className="body">
              <p>
                Justin, a Manila resident, lived a joyous life alongside his dog
                Max. One day, during a city festival, Max got lost in the crowd.
                Justin felt lost himself, his home emptier without his cheerful
                Golden Retriever. Determined not to lose hope, he posted Max's
                details on Mission Pawsible. Raffy's post reached many kind
                hearts. Everyone shared Max's story, helping the search grow
                bigger each day. After some anxious weeks, help came from
                Charice, another website user. She found Max in Quiapo,
                recognized him from his photos, and immediately contacted
                Justin. Justin drove through Manila, his heart pounding. The
                sight of Max wagging his tail brought tears to Justin's eyes.
                Overwhelmed, he realized the power of community what seemed
                impossible alone was effortless when people stood together.
                Max's return filled Justin with deep gratitude for Mission
                Pawsible. Today, he happily shares their story, hoping it will
                bring hope to others still searching for their lost friends. His
                story is a testament to the miracles our platform can create
                alongside a robust and caring community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title">
          <h2>Adopt a Pet</h2>
        </div>
        <div className="adoption">
          <div className="header">
            <h5>
              Find your perfect furry companion. Explore pet adoption
              opportunities now!
            </h5>
          </div>
          <div className="body">
            <a href="https://www.caraphil.org/" className="adopt-link">
              <img src="/img-cara.png" alt="caraphil" />
            </a>
            <a href="http://www.philanimalrescue.org/" className="adopt-link">
              <img src="/img-part.png" alt="phil-animal-rescue" />
            </a>
            <a href="https://pawssionproject.org.ph/" className="adopt-link">
              <img src="/img-pawssion.png" alt="pawssion-project" />
            </a>
          </div>
        </div>
      </div>
      <div className="microchip">
        <div className="img">
          <img src="/img-microchipped.png" alt="" />
        </div>
        <div className="info">
          <div className="header">
            <h2 className="main">Secure their Return</h2>
            <h6 className="sub">Microchip Your Beloved Pet Today!</h6>
          </div>

          <div className="body">
            <p className="text">
              Protect your furry friend with peace of mind. Get them
              microchipped today and increase their chances of being reunited if
              lost. Act now and ensure their safety.
            </p>

            <div className="btns">
              <div className="button bg-orange">
                <h5>View Intro</h5>
              </div>
              <div className="button bg-blue">
                <h5>Explore Now</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Other;

// STYLES
import "./FeaturedStory.scss";

function FeaturedStory() {
  return (
    <div className="featured-container">
      <div>
        <h1 className="featured-header">Featured Story</h1>
      </div>
      <div>
        <div className="featured-middle-container">
          <div>
            <img
              className="featured-img"
              src="/img-story.png"
              alt="featured story image"
              width="600vw"
            />
          </div>
          <div className="featured-right-details">
            <h6 className="featured-date">December 09, 2023</h6>
            <h2 className="featured-story-title">
              A Bark Away: The Journey of Max&apos;s Return
            </h2>
            <br />
            <br />
            <p className="featured-text">
              Determined not to lose hope, he posted Max's details on Mission
              Pawsible. Raffy's post reached many kind hearts. Everyone shared
              Max's story, helping the search grow bigger each day.
              <br />
              <br />
              Justin, a Manila resident, lived a joyous life alongside his dog
              Max. One day, during a city festival, Max got lost in the crowd.
              Justin felt lost himself, his home emptier without his cheerful
              Golden Retriever.
              <br />
              <br />
              After some anxious weeks, help came from Charice, another website
              user. She found Max in Quiapo, recognized him from his photos, and
              immediately contacted Justin.
              <br />
              <br />
              Justin drove through Manila, his heart pounding. The sight of Max
              wagging his tail brought tears to Justin's eyes. Overwhelmed, he
              realized the power of community what seemed impossible alone was
              effortless when people stood together.
              <br />
              <br />
              Max's return filled Justin with deep gratitude for Mission
              Pawsible. Today, he happily shares their story, hoping it will
              bring hope to others still searching for their lost friends. His
              story is a testament to the miracles our platform can create
              alongside a robust and caring community.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="title">
    //     <h2>Featured Story</h2>
    //   </div>

    //   <div className="story">
    //     <div className="img">
    //       <img src="/img-story.png" alt="featured story image" />
    //     </div>

    //     <div className="info">
    //       <div className="header">
    //         <h6 className="sub">May 8, 2023</h6>
    //         <h4 className="main">A Bark Away: The Journey of Max's Return</h4>
    //       </div>

    //       <div className="body">
    //         <p>
    //           Justin, a Manila resident, lived a joyous life alongside his dog
    //           Max. One day, during a city festival, Max got lost in the crowd.
    //           Justin felt lost himself, his home emptier without his cheerful
    //           Golden Retriever. Determined not to lose hope, he posted Max's
    //           details on Mission Pawsible. Raffy's post reached many kind
    //           hearts. Everyone shared Max's story, helping the search grow
    //           bigger each day. After some anxious weeks, help came from Charice,
    //           another website user. She found Max in Quiapo, recognized him from
    //           his photos, and immediately contacted Justin. Justin drove through
    //           Manila, his heart pounding. The sight of Max wagging his tail
    //           brought tears to Justin's eyes. Overwhelmed, he realized the power
    //           of community what seemed impossible alone was effortless when
    //           people stood together. Max's return filled Justin with deep
    //           gratitude for Mission Pawsible. Today, he happily shares their
    //           story, hoping it will bring hope to others still searching for
    //           their lost friends. His story is a testament to the miracles our
    //           platform can create alongside a robust and caring community.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default FeaturedStory;

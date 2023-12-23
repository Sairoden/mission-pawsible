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
            <div>
              <h6 className="featured-date">December 09, 2023</h6>
              <h2 className="featured-story-title">
                A Bark Away: The Journey of Max&apos;s Return
              </h2>
            </div>
            <div>
              <p className="featured-text">
                Once upon a time in Manila, Justin and his joyful Golden
                Retriever, Max, shared a happy life together. But one day,
                during a bustling city festival, Max got lost in the crowd,
                leaving Justin feeling lost without his furry companion.
              </p>
              <p className="featured-text">
                Determined to find Max, Justin turned to Mission Pawsible, where
                he shared Max's details. The response was heartwarming as kind
                hearted people rallied together to share Max's story far and
                wide. Each day, the search grew, fueled by the compassion of the
                online community.
              </p>
              <p className="featured-text">
                After weeks of anxious waiting, a ray of hope came from Charice,
                a fellow user on the website. She spotted Max in Quiapo,
                recognized him from the shared photos, and swiftly contacted
                Justin through the platform.
              </p>
              <p className="featured-text">
                With a pounding heart, Justin drove through Manila, and the
                moment he saw Max wagging his tail, tears filled his eyes.
                Overwhelmed with gratitude, he realized the power of community.
                What seemed impossible alone became effortless when people stood
                together.
              </p>
              <p className="featured-text">
                Max's return not only brought immense joy to Justin but also
                inspired him to share their story. Today, he happily spreads the
                tale of hope, proving that miracles can happen through the
                combined efforts of a caring community on Mission Pawsible.
              </p>
              <p className="featured-text">
                This heartwarming story stands as a testament to the platform's
                ability to create miracles and reunite lost pets with their
                owners, thanks to a robust and compassionate community.
              </p>
            </div>
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

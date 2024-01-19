// STYLES
import "./FeaturedStory.scss";

// ASSETS
import featuredStoryBanner from "../../../assets/featuredStoryBanner.png";

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
              src={featuredStoryBanner}
              alt="featured story image"
              width="580vw"
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
  );
}

export default FeaturedStory;

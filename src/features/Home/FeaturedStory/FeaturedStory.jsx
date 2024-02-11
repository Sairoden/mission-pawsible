// STYLES
import "./FeaturedStory.scss";
import { motion } from "framer-motion";

// ASSETS
import featuredStoryBanner from "../../../assets/featuredStoryBanner.png";

function FeaturedStory() {
  const title = "A Bark Away: The Journey of Justin's Homecoming";

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
              <div className="featured-story-title-animation">
                {title.split("").map((char, i) => (
                  <motion.h2
                    key={char + i}
                    className="featured-story-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: i / 10,
                    }}
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.h2>
                ))}
              </div>
            </div>
            <div>
              <p className="featured-text">Hey everyone,</p>
              <p className="featured-text">
                I'm Max, and I wanna share a story that still gives me
                goosebumps every time I think about it. It's about my son, me,
                and our furry family member Justin, a golden retriever who means
                the world to us.
              </p>
              <p className="featured-text">
                It was a bright sunny day when my son came running to me with
                tears in his eyes. He told me that our beloved golden retriever,
                Justin, was missing. I could see the devastation in his eyes,
                and it broke my heart to see him so upset. We searched
                everywhere, put up posters, and asked around, but there was no
                sign of Justin.
              </p>
              <p className="featured-text">
                I decided to post on Mission Pawsible, hoping that someone might
                have seen Justin. That's when Sophia saw my post and reached out
                to me through chat. She had found Justin and wanted to reunite
                us. I couldn't believe it! I was overwhelmed with gratitude for
                her kindness.
              </p>
              <p className="featured-text">
                Sophia brought Justin back to us, and the moment my son saw him,
                his face lit up with joy. It was a heartwarming reunion, and I
                couldn't thank Sophia enough for bringing Justin back to us. I
                shared our story to let everyone know that miracles do happen
                and to never lose hope.
              </p>
              <p className="featured-text">
                Justin is back where he belongs and our family is complete
                again. I will forever be grateful to Sophia for her kindness and
                the combined efforts of a caring community on Mission Pawsible.
                They brought Justin back home to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedStory;

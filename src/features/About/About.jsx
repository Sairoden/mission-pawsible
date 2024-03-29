// STYLES
import "./About.scss";
import { motion } from "framer-motion";

// ASSETS
import aboutUs1 from "../../assets/about-us-pet-1.png";
import aboutUs2 from "../../assets/about-us-pet-2.png";
import aboutUs3 from "../../assets/about-us-pet-3.png";

function AboutUs() {
  return (
    <div className="about-us container spacing-t spacing-b">
      {/* <div className="container"> */}
      <div className="info">
        <div className="title">
          <h2>About Us</h2>
        </div>
        <div className="body">
          <p className="text">
            Mission Pawsible is driven by a simple yet powerful mission: to
            reunite lost pets with their loving families. The unbreakable bond
            between pets and their owners is at the heart of everything we do.
            We understand the worry and heartache that come with a pet's
            disappearance, and we're here to make those heartwarming reunions
            possible.
          </p>

          <p className="text">
            Our journey began with a shared passion for pets and a vision to
            create a safer, more efficient platform for lost pets. We wanted to
            connect pet owners, finders, and lovers while offering valuable
            resources and a caring community. It's our pleasure to witness the
            sheer joy and relief on the faces of reunited pet owners. Your
            stories inspire us, and your support keeps us dedicated to our
            mission. Together, we're making a difference, one wagging tail at a
            time
          </p>

          <p className="text">
            So, whether you're a pet owner, a finder, or an animal enthusiast,
            we welcome you to be part of our journey. Share your stories, join
            our community, and help us in our mission to ensure that no lost pet
            remains lost for long. Lost and Found Dog Network is where hope and
            love intersect, and every reunion is a testament to the power of
            unity. Thank you for being a part of our network, where we celebrate
            the extraordinary bond between humans and their four-legged
            companions.
          </p>
        </div>
      </div>

      <div className="img">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="image1"
        >
          <motion.img
            src={aboutUs1}
            alt="Cat Image"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="image2"
        >
          <motion.img
            src={aboutUs2}
            alt="Dog Chihuahua Image"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="image3"
        >
          <motion.img
            src={aboutUs3}
            alt="Dog Image"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          />
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AboutUs;

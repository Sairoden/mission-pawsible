// FEATURES COMPONENTS
import {
  Landing,
  Showcase,
  ContactUs,
  Stats,
  Carousel,
  Other,
} from "../features";

function Home() {
  return (
    <>
      <Landing />
      <Stats />
      <Carousel />
      <Showcase />
      {/* <Other /> */}
      <ContactUs />
    </>
  );
}

export default Home;

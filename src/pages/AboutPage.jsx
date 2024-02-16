import { useEffect } from "react";
import { UsTitle, AboutContent } from "../components";
import { VISION, MISSION } from "../constants";
import visionImg from "../assets/images/about/vision-pic.png";
import missionImg from "../assets/images/about/mission-pic.png";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <section className="min-h-[100dvh] pd-y bg-white">
      <UsTitle title="about" />
      <div className="container flex flex-col gap-4 mt-8">
        <AboutContent title="vision" content={VISION} image={visionImg} />
        <AboutContent title="mission" content={MISSION} image={missionImg} />
      </div>
    </section>
  );
};

export default AboutPage;

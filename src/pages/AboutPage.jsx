import { useEffect } from "react";
import { UsTitle, AboutContent } from "../components";
import { VISION, MISSION } from "../constants";
import { missionVector, visionVector } from "../assets/images";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[100dvh] pd-y bg-white">
      <UsTitle title="about" />
      <div className="container flex flex-col gap-4 mt-8">
        <AboutContent title="vision" content={VISION} image={visionVector} />
        <AboutContent title="mission" content={MISSION} image={missionVector} />
      </div>
    </section>
  );
};

export default AboutPage;

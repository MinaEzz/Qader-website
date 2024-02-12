import { useEffect, useState } from "react";
import { backgroundSlides } from "../../assets/images/background";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (slide === 2) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [slide]);

  const backGround = {
    backgroundImage: `url(${backgroundSlides[slide].url})`,
  };
  return (
    <section
      className="relative w-full min-h-[100dvh] transition-all ease-in-out duration-0 bg-cover bg-center bg-fixed"
      style={backGround}
    >
      <div className="layer flex flex-col text-center justify-center items-center gap-4">
        <h1 className="text-primary text-8xl font-extrabold tracking-wider uppercase">
          Qader
        </h1>
        <p className=" text-white text-4xl font-bold capitalize">
          breaking <span className="text-coral-red text-5xl">boundaries</span>,
          building
          <span className="text-primary text-5xl"> accessibility</span>
        </p>
        <Button label="shop now" icon={<FaArrowRight size={18} />} />
      </div>
    </section>
  );
};

export default Hero;

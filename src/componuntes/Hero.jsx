import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );

  const HandleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", HandleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", HandleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta",{
      y:-50,
      opacity: 1,
      delay: 2,
    })
  }, []);

  return (
    <section className="w-full bg-black relative nav-height">
      <div className="h-5/6 w-full flex-col flex-center">
        <p className="hero-title" id="hero">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col  items-center opacity-0 translate-y-20" id="cta">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/Month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

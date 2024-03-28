import React, { useState, useEffect } from "react";
import heroImgMob from "../../Images/Png/heroMob.png";
import heroImgTab from "../../Images/Png/heroTab.png";
import heroImgDesk from "../../Images/Png/heroDesk.png";
import {
  HeroBtn,
  HeroCont,
  HeroImage,
  HeroMainTitle,
  HeroSection,
  HeroTextThree,
  HeroTextkOne,
  HeroTextkTwo,
} from "./Hero.styled";

const Hero = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setScreenSize("small");
      } else if (
        window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches
      ) {
        setScreenSize("medium");
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        setScreenSize("large");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imgSrc;

  switch (screenSize) {
    case "small":
      imgSrc = heroImgMob;
      break;
    case "medium":
      imgSrc = heroImgTab;
      break;
    case "large":
      imgSrc = heroImgDesk;
      break;
    default:
      break;
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection>
      <HeroTextkOne>diD yOu seE iT ?</HeroTextkOne>
      <HeroMainTitle>
        <span>YACHT </span>
        <span>APES</span>
      </HeroMainTitle>
      <HeroTextkTwo>Apes aRe eveRywhere</HeroTextkTwo>
      <HeroImage src={imgSrc} alt="monkey" />
      <HeroCont>
        <HeroBtn type="button" onClick={() => scrollToSection("mint")}>
          Meet Apes
        </HeroBtn>
        <HeroTextThree>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </HeroTextThree>
      </HeroCont>
    </HeroSection>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  ArtsSection,
  ArtsSlider,
  ArtSlide,
  ArtTitle,
} from "./Arts.styled";
import { ArtSlides } from "../Data/ArtsData";
import { Container } from "../App/App.styled";
import BtnArrow from "../Buttons/BtnArrow/BtnArrow";

const Arts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? prevSlide : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? prevSlide : prevSlide + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    else if (e.key === "ArrowRight") handleNext();
  };

  const SlidesPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setSlidesPerPage(4);
    } else if (screenWidth >= 768) {
      setSlidesPerPage(2);
    } else {
      setSlidesPerPage(1);
    }
  };

  useEffect(() => {
    SlidesPerPage();
    setTotalSlides(ArtSlides.length);
    window.addEventListener("resize", SlidesPerPage);
    return () => {
      window.removeEventListener("resize", SlidesPerPage);
    };
  }, []);

  return (
    <Container>
      <ArtsSection
        id="arts"
        {...swipeHandlers}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <ArtTitle>COLLECTION</ArtTitle>
        <ArtsSlider>
          {ArtSlides.map((slide, index) => (
            <ArtSlide
              key={index}
              src={slide}
              alt={`Art ${index}`}
              aria-hidden={index !== currentSlide}
              style={{
                display:
                  index >= currentSlide && index < currentSlide + slidesPerPage
                    ? "block"
                    : "none",
              }}
            />
          ))}
        </ArtsSlider>
        <BtnArrow
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentIndex={currentSlide}
          totalItems={totalSlides}
          slidesPerPage={slidesPerPage}
        />
      </ArtsSection>
    </Container>
  );
};

export default Arts;

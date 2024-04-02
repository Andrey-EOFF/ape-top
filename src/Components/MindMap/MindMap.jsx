import React, { useState, useEffect, useCallback } from "react";
import { MIND_MAP_DATA } from "../Data/MidMapData";
import {
  CardContainer,
  Card,
  CardTitle,
  CardText,
  MindMapTitle,
  MindMapSection,
  MindArrow,
  PrevNextButtons,
} from "./MindMap.styled";
import { useSwipeable } from "react-swipeable";

const MindMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  }, [setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === MIND_MAP_DATA.length - 1 ? prevIndex : prevIndex + 1
    );
  }, [setCurrentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleNext, handlePrev]);

  return (
    <MindMapSection id="mindmap" {...handlers}>
      <MindMapTitle>MindMap</MindMapTitle>
      <CardContainer>
        {MIND_MAP_DATA.map((item, index) => (
          <a href={item.url} key={index}>
            <Card
              key={index}
              style={{ backgroundColor: item.bgColor }}
              isActive={index === currentIndex}
            >
              <CardText>{item.text}</CardText>
              <CardTitle>{item.title}</CardTitle>
              {item.icon && <MindArrow />}
            </Card>
          </a>
        ))}
      </CardContainer>
      <PrevNextButtons>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === MIND_MAP_DATA.length - 1}
        >
          Next
        </button>
      </PrevNextButtons>
    </MindMapSection>
  );
};

export default MindMap;

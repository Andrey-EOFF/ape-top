import React from "react";
import { PrevNextButtons } from "./BtnArrow.styled";

const BtnArrow = ({
  handlePrev,
  handleNext,
  currentIndex,
  totalItems,
  slidesPerPage,
}) => {
  const isArts = slidesPerPage !== undefined;

  return (
    <PrevNextButtons>
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={
          isArts
            ? currentIndex === totalItems - slidesPerPage
            : currentIndex === totalItems - 1
        }
      >
        Next
      </button>
    </PrevNextButtons>
  );
};

export default BtnArrow;

import React from "react";
import { HeroBtn } from "./BtnMeet.styled";

const BtnMeet = ({ onClick }) => {
  return (
    <HeroBtn type="button" onClick={onClick}>
      Meet Apes
    </HeroBtn>
  );
};

export default BtnMeet;

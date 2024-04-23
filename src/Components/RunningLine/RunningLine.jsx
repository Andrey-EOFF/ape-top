import React from "react";
import DoubleMarquee from "react-double-marquee";
import { ReactComponent as AboutSharp } from "../../Images/Svg/AboutSharp.svg";
import { StyledRunningLine } from "./RunningLine.styled";

const RunningLine = () => {
  return (
    <StyledRunningLine>
      <DoubleMarquee marqueeOnStart loop>
      
          <p>TROY STEREOTYPES</p>
          <span>
            <AboutSharp />
          </span>
          <p>HAVE NO LIMITS</p>
          <span>
            <AboutSharp />
          </span>
          <p>BREAK RULES</p>
          <span>
            <AboutSharp />
          </span>
       
      </DoubleMarquee>
    </StyledRunningLine>
  );
};

export default RunningLine;

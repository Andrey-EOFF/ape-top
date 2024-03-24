import styled from "styled-components";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const ArtsSection = styled.section`
  overflow: hidden;
  border: none;
  background-color: transparent;
  padding-top: 60px;

  @media (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
  }
`;

export const ArtTitle = styled.h2`
  margin-bottom: 24px;

  color: ${Colors.ColorWhite};

  font-family: "Right Grotesk Compact";
  font-size: 44px;
  font-weight: 900;
  line-height: 1;
  text-align: center;

  @media (min-width: ${SizeDev.TAB}) {
    margin-bottom: 40px;
    font-size: 80px;
    font-weight: 900;
    line-height: 1;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-bottom: 80px;
    font-size: 160px;
    font-weight: 900;
    line-height: 1;
  }
`;

export const ArtsSlider = styled.div`
  gap: 24px;
  display: flex;
  transition: transform 0.5s ease;
  overflow: hidden;
`;

export const ArtSlide = styled.img`
  flex: 0 0 auto;
  width: 215px;
  height: 256px;

  @media (min-width: ${SizeDev.TAB}) {
    width: 284px;
    height: 336px;
  }
  @media (min-width: ${SizeDev.DESK}) {
    width: 240px;
    height: 280px;
  }
`;

export const PrevNextButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 150px;
  margin-top: 24px;

  margin-left: auto;
  margin-right: auto;

  button {
    border: none;
    background-color: transparent;
    color: ${Colors.ColorWhite};
    font-family: "Biro Script Plus Bold US";
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    text-align: center;

    cursor: pointer;
  }
`;

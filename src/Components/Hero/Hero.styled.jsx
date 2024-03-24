import styled from "styled-components";
import { SizeDev, Colors, Utils } from "../styles/ConstantStyles";

export const HeroSection = styled.section`
  position: relative;
  top: 60px;
  width: 216px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${SizeDev.TAB}) {
    width: 591px;

    align-items: start;
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 1019px;
  }
`;

export const HeroMainTitle = styled.h1`
  margin-top: 5px;
  margin-bottom: 8px;

  font-family: "Right Grotesk Compact";
  font-size: 44px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${Colors.ColorBlack};

  @media (min-width: ${SizeDev.TAB}) {
    width: 100%;
    margin-bottom: 16px;
    margin-top: 0;

    display: flex;
    justify-content: space-between;

    font-size: 92px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.01em;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-bottom: 25px;

    font-size: 164px;
    font-weight: 900;
    line-height: 1;
  }
`;

export const HeroTextkOne = styled.p`
  position: absolute;
  top: -22px;

  font-family: "Biro Script Plus Bold US";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.69;
  text-align: left;

  color: ${Colors.ColorBlack};

  @media (min-width: ${SizeDev.TAB}) {
    position: static;

    margin-top: 64px;

    font-size: 20px;
    line-height: 1.65;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-top: 130px;

    font-size: 24px;
    line-height: 1.67;
  }
`;

export const HeroTextkTwo = styled.p`
  margin-bottom: 6px;

  font-family: "Biro Script Plus Bold US";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.69;

  color: ${Colors.ColorBlack};

  @media (min-width: ${SizeDev.TAB}) {
    margin-bottom: 0;

    font-size: 20px;
    line-height: 1.65;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-left: 120px;

    font-size: 24px;
    line-height: 1.67;
  }
`;

export const HeroTextThree = styled.p`
  font-family: "Messina Sans Mono Regular";

  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  text-align: center;

  color: ${Colors.ColorBlack};

  @media (min-width: ${SizeDev.TAB}) {
    text-align: justify;

  }

  @media (min-width: ${SizeDev.DESK}) {
    font-size: 16px;
    line-height: 1.19;

   
  }
`;

export const HeroImage = styled.img`
  width: 216px;

  @media (min-width: ${SizeDev.TAB}) {
    position: absolute;
    top: -25px;
    left: 133px;

    width: 283px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    top: 5px;
    left: 248px;

    width: 463px;
  }
`;

export const HeroCont = styled.div`
  position: relative;
  top: -4px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${SizeDev.TAB}) {
    top: -19px;

    width: 190px;
    margin-left: auto;

    flex-direction: column-reverse;
    gap: 16px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    top: -30px;

    width: 337px;

    gap: 28px;
  }
`;

export const HeroBtn = styled.button`
  width: 216px;
  height: 41px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Right Grotesk Compact";
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  text-transform: uppercase;
  border: none;

  cursor: pointer;

  color: ${Colors.ColorBlack};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  background-color: ${Colors.BgBtMenu};

  transition: ${Utils.transition};

  &:hover {
    color: white;
  }

  @media (min-width: 768px) {
    width: 190px;
    height: 41px;

    border-radius: 16px;
  }

  @media (min-width: 1280px) {
    width: 337px;
    height: 70px;

    font-size: 28px;
    line-height: 121%;
  }
`;

import styled from "styled-components";
import { ReactComponent as AboutSharp } from "../../Images/Svg/AboutSharp.svg";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const AboutSection = styled.section`
  position: relative;
  padding-top: 123px;

  @media (min-width: ${SizeDev.TAB}) {
    padding-top: 140px;
    padding-bottom: 36px;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding-top: 180px;
    padding-bottom: 40px;
  }
`;

export const AboutTitle = styled.h2`
  margin-bottom: 16px;
  font-family: "Right Grotesk Compact";
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: ${Colors.ColorWhite};

  span {
    color: ${Colors.ColorAkcent};
  }

  @media (min-width: ${SizeDev.TAB}) {
    width: 269px;
    margin-bottom: 68px;
    font-size: 60px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 538px;
    margin-bottom: 56px;
    font-size: 120px;
  }
`;

export const AboutTextOne = styled.p`
  margin-bottom: 36px;
  font-family: "Messina Sans Mono Regular";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: right;
  color: ${Colors.ColorWhite};

  @media (min-width: ${SizeDev.TAB}) {
    width: 275px;
    margin-bottom: 0;
    margin-top: 12px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 409px;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const AboutTextTwo = styled.p`
  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;
  color: ${Colors.ColorWhite};

  @media (min-width: ${SizeDev.TAB}) {
    font-size: 16px;
    line-height: 1.19;
  }

  @media (min-width: ${SizeDev.DESK}) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const CrossIconStyled = styled(AboutSharp)`
  width: 24px;
  height: 24px;

  @media (min-width: ${SizeDev.DESK}) {
    width: 36px;
    height: 36px;
  }
`;

export const AboutCont = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${SizeDev.TAB}) {
    width: 269px;
    margin-bottom: 0;
    gap: 24px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 417px;
    gap: 36px;
  }
`;

export const AboutImg = styled.img`
  width: 216px;

  @media (min-width: ${SizeDev.TAB}) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 313px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    bottom: 0px;
    width: 492px;
  }
`;

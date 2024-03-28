import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

export const InWorkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  padding: 16px;
  padding-top: 60px;
  background-color: ${Colors.BgBtMenu};
  color: ${Colors.ColorWhite};
  font-size: 24px;
  border-radius: 12px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
    font-size: 36px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
    font-size: 48px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-family: "Right Grotesk Compact";
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;

  @media (min-width: ${SizeDev.TAB}) {
    margin-bottom: 48px;
    font-size: 80px;
    font-weight: 900;
    line-height: 1;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-bottom: 80px;
    font-size: 160px;
    font-weight: 900;
  }
`;

export const MainText = styled.p`
  margin-bottom: 24px;
  font-family: "Messina Sans Mono Regular";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: start;
  text-transform: uppercase;
`;

export const Message = styled.p`
  font-size: 24px;
  color: ${Colors.ColorAkcent};

  @media screen and (min-width: ${SizeDev.TAB}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    font-size: 30px;
  }
`;

export const LogoBlock = styled.div`
  width: 100px;
  height: 100px;
`;

export const LogoStyle = styled.svg`
  display: block;
  width: 70px;
  height: 70px;
  margin-top: 8px;
  cursor: pointer;

  path {
    fill: ${Colors.ColorWhite};
    transition: ${Utils.transition};
  }

  &:hover {
    path {
      fill: ${Colors.ColorAkcent};
      transform: scale(1.01);
    }
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    width: 120px;
    height: 120px;
  }
`;

export const LinkLogo = styled.a`
  width: 80px;
  height: 80px;

  @media screen and (min-width: ${SizeDev.DESK}) {
  }
`;

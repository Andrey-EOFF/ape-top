import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

export const FaqSection = styled.section`
  padding-top: 60px;

  @media (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
  }
`;

export const FaqTitle = styled.h2`
  margin-bottom: 24px;
  font-family: "Right Grotesk Compact";
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;
  color: ${Colors.ColorWhite};

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

export const FaqItemContainer = styled.div`
  position: relative;
  display: flex;
  padding: 8px;
  background-color: ${({ isOpen }) => (isOpen ? Colors.BgFaq : "transparent")};
  border-radius: 12px;
  cursor: pointer;

  @media (min-width: ${SizeDev.TAB}) {
    padding: 18px;
    border-radius: 16px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding: 24px;
    border-radius: 24px;
  }
`;

export const FaqQuestion = styled.h3`
  margin-bottom: 16px;
  font-family: "Right Grotesk Compact";
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  transition: ${Utils.transition};
  color: ${({ isOpen }) => (isOpen ? Colors.ColorAkcent : Colors.ColorWhite)};

  &:hover {
    color: ${Colors.ColorAkcent};
  }

  @media (min-width: ${SizeDev.TAB}) {
    margin-bottom: 36px;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-bottom: 48px;
    font-size: 64px;
  }
`;

export const FaqAnswer = styled.p`
  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  color: ${Colors.ColorWhite};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (min-width: ${SizeDev.DESK}) {
    font-size: 16px;
    line-height: 1.9;
  }
`;

export const BoxOpen = styled.div``;

export const NumQues = styled.span`
  color: ${({ isOpen }) => (isOpen ? Colors.ColorWhite : Colors.ColorAkcent)};
  margin-right: 8px;
  padding-top: 3px;
  font-family: "Biro Script Plus Bold US";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
  text-align: left;

  @media (min-width: ${SizeDev.TAB}) {
    margin-right: 24px;
    margin-left: 140px;
    font-size: 16px;
    line-height: 1.69;
    padding-top: 2px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    margin-right: 31px;
    margin-left: 230px;
    font-size: 24px;
    line-height: 1.66;
    padding-top: 10px;
  }
`;

export const FaqImage = styled.img`
  display: none;

  @media (min-width: ${SizeDev.TAB}) {
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    width: 148px;
    height: 183px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-16deg)" : "none")};
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 248px;
    height: 282px;
  }
`;

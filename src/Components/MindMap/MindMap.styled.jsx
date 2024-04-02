import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

import { ReactComponent as MindSvg } from "../../Images/Svg/mind-arrow.svg";

const cardSizes = {
  mobile: {
    width: "216px",
    height: "242px",
  },
  tablet: {
    width: "284px",
    height: "242px",
  },
  desktop: {
    width: "504px",
    height: "480px",
  },
};

export const MindMapSection = styled.div`
  padding-top: 60px;

  @media (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
  }
`;

export const MindMapTitle = styled.h2`
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

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(242px, 1fr));

  @media (max-width: ${SizeDev.TAB}) {
    overflow-x: scroll;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: ${SizeDev.TAB}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const Card = styled.li`
  position: relative;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;

  padding: 24px 12px;
  border-radius: 10px;
  color: ${Colors.ColorWhite};

  img {
    width: 24px;
    height: 24px;
  }
  a {
    text-decoration: underline;
  }

  width: 100%;
  height: ${cardSizes.mobile.height};

  @media (min-width: ${SizeDev.TAB}) {
    width: ${cardSizes.tablet.width};
    height: ${cardSizes.tablet.height};
    display: flex;
  }

  @media (min-width: ${SizeDev.DESK}) {
    padding: 24px;
    width: ${cardSizes.desktop.width};
    height: ${cardSizes.desktop.height};
    display: flex;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Right Grotesk Compact";
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-align: left;

  @media (min-width: ${SizeDev.DESK}) {
    font-size: 64px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
  }
`;

export const CardText = styled.p`
  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;

  @media (min-width: ${SizeDev.TAB}) {
    margin-left: 132px;
    width: 128px;
  }
  @media (min-width: ${SizeDev.DESK}) {
    margin-left: 252px;
    width: 228px;

    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    text-align: left;
  }
`;

export const MindArrow = styled(MindSvg)`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  fill: ${Colors.ColorWhite};

  @media (min-width: ${SizeDev.TAB}) {
    top: 36px;
    right: 36px;
  }
  @media (min-width: ${SizeDev.DESK}) {
    width: 40px;
    height: 40px;
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
    transition: ${Utils.transition};
    cursor: pointer;

    &:hover {
      color: ${Colors.ColorAkcent};
      transform: scale(1.15);
    }
  }

  @media (min-width: ${SizeDev.TAB}) {
    display: none;
  }
`;

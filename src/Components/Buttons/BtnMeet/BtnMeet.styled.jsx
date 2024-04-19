import styled from "styled-components";
import { Colors, Utils } from "../../styles/ConstantStyles";


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

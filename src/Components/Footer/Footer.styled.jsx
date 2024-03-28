import styled from "styled-components";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const FooterSection = styled.div`
  padding-top: 60px;
  padding-bottom: 24px;

  color: ${Colors.ColorWhite};

  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  text-align: center;

  @media (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
    padding-bottom: 40px;

  }

  @media (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const FooterText = styled.div``;

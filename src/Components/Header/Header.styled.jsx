import styled from "styled-components";
import { SizeDev, Colors } from "../styles/ConstantStyles";

export const HeaderSection = styled.div`
  position: relative;

  justify-content: space-between;
  min-width: 344px;
  max-width: calc(${SizeDev.MOB_END} - 16px);
  height: 542px;
  background-color: ${Colors.BgColorAkcent};
  border-radius: 12px;
  margin: 0 auto;
  padding: 8px;
  margin-top: 54px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    min-width: ${SizeDev.TAB};
    height: 421px;
    padding: 12px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    min-width: ${SizeDev.DESK_END};
    height: 677px;
    padding: 24px 96px 0 96px;
  }
`;


import styled from "styled-components";
import { SizeDev } from "../styles/ConstantStyles";

export const Container = styled.div`
  width: 344px;
  padding: 0 60px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${SizeDev.TAB}) {
    width: 768px;
    padding: 0 88px;
  }

  @media (min-width: ${SizeDev.DESK}) {
    width: 1440px;
    padding: 0 204px;
  }
`;

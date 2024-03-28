import React from "react";
import {
  ContentWrapper,
  Heading,
  Message,
  LinkLogo,
  LogoStyle,
  InWorkSection,
  MainText,
  LogoBlock,
} from "./InWork.styled";

import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";

const InWork = () => {
  return (
    <InWorkSection>
      <ContentWrapper>
        <Heading>Are you in?</Heading>

        <MainText>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </MainText>

        <Message>Come back later, we're working on making it better!</Message>
        <LogoBlock>
          <LinkLogo href="https://andrey-eoff.github.io/ape-top/">
            <LogoStyle as={LogoSvg} />
          </LinkLogo>
        </LogoBlock>
      </ContentWrapper>
    </InWorkSection>
  );
};

export default InWork;

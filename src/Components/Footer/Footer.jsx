import React from "react";
import { FooterSection, FooterText } from "./Footer.styled";

const Footer = ({ isMenuOpen }) => {
  return (
    <FooterSection >
      <FooterText>© Yacht ape 2024 all rights reserved</FooterText>
    </FooterSection>
  );
};

export default Footer;

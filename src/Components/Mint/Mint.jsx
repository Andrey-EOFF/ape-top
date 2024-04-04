import React, { useState } from "react";
import {
  ContentWrapper,
  Heading,
  InWorkSection,
  MainText,
  CrossIconStyled,
  StyledField,
  StyledButton,
  FormBlock,
  FormBlockField,
  FormFieldSvg,
  StyledDiskForm,
  StyledMetaForm,
  BoxField,
  ErrorMessageField,
} from "./Mint.styled";

import { Formik } from "formik";
import { Container } from "../App/App.styled";

const Mint = () => {
  const [buttonText, setButtonText] = useState("MINT");

  const handleFormSubmit = async (values, actions) => {
    const isUsernameValid = /^@\w+$/i.test(values.username);
    const isWalletAddressValid = /^1x[0-9a-fA-F]{16}$/i.test(
      values.walletAddress
    );

    if (isUsernameValid && isWalletAddressValid) {
      alert("Форма успішно відправлена");
      setButtonText("MINTED");
    } else {
      setButtonText("ERROR");
    }

    actions.resetForm();
  };

  return (
    <Container>
      <InWorkSection id="mint">
        <ContentWrapper>
          <Heading>Are you in?</Heading>

          <MainText>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </MainText>

          <CrossIconStyled />

          <Formik
            initialValues={{ username: "", walletAddress: "" }}
            onSubmit={handleFormSubmit}
            validate={(values) => {
              const errors = {};

              if (!values.username) {
                errors.username = "WRONG DISCORD";
              }
              if (!values.walletAddress) {
                errors.walletAddress = "WRONG ADDRESS";
              }

              return errors;
            }}
          >
            {({ handleSubmit }) => (
              <FormBlock onSubmit={handleSubmit}>
                <BoxField>
                  <FormBlockField>
                    <FormFieldSvg>
                      <StyledDiskForm />
                    </FormFieldSvg>

                    <StyledField
                      name="username"
                      type="text"
                      placeholder="@USERNAME"
                    />
                    <ErrorMessageField name="username" component="p" />
                  </FormBlockField>
                </BoxField>

                <BoxField>
                  <FormBlockField>
                    <FormFieldSvg>
                      <StyledMetaForm />
                    </FormFieldSvg>

                    <StyledField
                      name="walletAddress"
                      type="text"
                      placeholder="Wallet Address"
                    />

                    <ErrorMessageField name="walletAddress" component="p" />
                  </FormBlockField>
                </BoxField>

                <StyledButton type="submit">{buttonText}</StyledButton>
              </FormBlock>
            )}
          </Formik>
        </ContentWrapper>
      </InWorkSection>
    </Container>
  );
};

export default Mint;

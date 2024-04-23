import React, { useState } from "react";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
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
import { Container } from "../App/App.styled";
import { ToastContainer, toast } from "react-toastify";

const Mint = () => {
  const [buttonText, setButtonText] = useState("MINT");

  const notifySuccess = () => toast.success("Successfully sent");
  const notifyError = () => toast.error("Error. Please check the entered data");

  const handleFormSubmit = async (values, actions) => {
    const isUsernameValid = /^@[A-Za-z0-9_]+$/.test(values.username);
    const isWalletAddressValid = /^1x[0-9a-z]{16}$/;

    if (isUsernameValid && isWalletAddressValid) {
      notifySuccess();
      setButtonText("MINTED");
    } else {
      notifyError();
      setButtonText("ERROR");
    }

    actions.resetForm();
  };

  const handleInputFocus = () => {
    if (buttonText !== "MINT") {
      setButtonText("MINT");
    }
  };

  return (
    <Container>
      <ToastContainer />
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
                      onFocus={handleInputFocus}
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
                      onFocus={handleInputFocus}
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

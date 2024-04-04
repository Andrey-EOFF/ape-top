import styled from "styled-components";
import { ReactComponent as AboutSharp } from "../../Images/Svg/AboutSharp.svg";
import { ReactComponent as DiscordForm } from "../../Images/Svg/discordForm.svg";
import { ReactComponent as MetaMaskForm } from "../../Images/Svg/metaMask_form.svg";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";
import { ErrorMessage, Field, Form } from "formik";

export const InWorkSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  padding: 16px;
  padding-top: 60px;
  background-color: inherit;
  color: ${Colors.ColorWhite};
  font-size: 24px;
  border-radius: 12px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    padding-top: 80px;
    font-size: 36px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    padding-top: 120px;
    font-size: 48px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-family: "Right Grotesk Compact";
  font-size: 44px;
  font-weight: 900;
  line-height: 0.9;
  text-align: center;

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

export const CrossIconStyled = styled(AboutSharp)`
  width: 36px;
  height: 36px;
  margin-bottom: 16px;

  @media (min-width: ${SizeDev.DESK}) {
    margin-bottom: 40px;
  }
`;

export const MainText = styled.p`
  margin-bottom: 16px;
  font-family: "Messina Sans Mono Regular";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${SizeDev.TAB}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    margin-bottom: 40px;

    font-size: 24px;
    line-height: 1.2;
  }
`;

export const FormBlock = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    width: 248px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    width: 397px;
    gap: 24px;
  }
`;

export const FormBlockField = styled.div`
  display: flex;
  border-radius: 8px;
`;

export const FormFieldSvg = styled.div`
  width: 48px;
  background-color: ${Colors.BgFaq};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media screen and (min-width: ${SizeDev.TAB}) {
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    height: 64px;
    width: 64px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const StyledDiskForm = styled(DiscordForm)``;

export const StyledMetaForm = styled(MetaMaskForm)``;

export const StyledField = styled(Field)`
  width: 100%;
  height: 48px;

  padding: 24px 22px;
  background-color: inherit;
  border: 1px solid;
  border-color: ${Colors.BgFaq};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  color: ${Colors.ColorWhite};

  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  text-transform: uppercase;

  &:hover {
    border-color: ${Colors.ColorWhite};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    height: 64px;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const StyledButton = styled.button`
  height: 41px;
  border-radius: 8px;

  border: none;
  color: ${Colors.ColorWhite};
  background-color: ${Colors.BgColorAkcent};

  font-family: "Right Grotesk Compact";
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
  transition: ${Utils.transition};

  &:hover {
    color: ${Colors.ColorBlack};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    height: 70px;

    border-radius: 12px;
    font-size: 28px;
    line-height: 1.21;
  }
`;

export const BoxField = styled.div`
  position: relative;
`;

export const ErrorMessageField = styled(ErrorMessage)`
  position: absolute;
  right: 0;
  bottom: -13px;

  color: ${Colors.ColorAkcent};

  font-family: "Messina Sans Mono Regular";
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
`;

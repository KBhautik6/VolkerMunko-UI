import styled, { createGlobalStyle } from "styled-components";
import NunitoBlack from "../fonts/Nunito-Black.ttf";
import NunitoBold from "../fonts/Nunito-Bold.ttf";
import NunitoRegular from "../fonts/Nunito-Regular.ttf";
import NunitoLight from "../fonts/Nunito-Light.ttf";
import NunitoSemiBold from "../fonts/Nunito-SemiBold.ttf";
import NunitoMedium from "../fonts/Nunito-Medium.ttf";

export const GlobalStyles = createGlobalStyle`
  border-style {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  @font-face {
    font-family: 'Nunito-Black';
    src: url(${NunitoBlack}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Bold';
    src: url(${NunitoBold}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Regular';
    src: url(${NunitoRegular}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Light';
    src: url(${NunitoLight}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-SemiBold';
    src: url(${NunitoSemiBold}) format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Medium';
    src: url(${NunitoMedium}) format('truetype');
    font-style: normal;
  }
`;

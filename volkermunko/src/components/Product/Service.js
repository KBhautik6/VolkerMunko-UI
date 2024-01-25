import React from "react";
import {
  StyledProductList,
  StyledProductMoreInfoImgWrapper,
  StyledProductMoreInfoImg,
  StyledServiceImageWrapper,
  StyledServiceImage,
  StyledServiceHeadingWrapper,
  StyledServiceHeading,
  StyledServiceContactBtnWrapper,
  StyledServiceContactBtn,
} from "./Service.styled";

export const Service = (props) => {
  return (
    <>
      <StyledProductList>
        <StyledProductMoreInfoImgWrapper>
          <StyledProductMoreInfoImg src={props.moreinfosrc} alt="more-info" />
        </StyledProductMoreInfoImgWrapper>
        <StyledServiceImageWrapper>
          <StyledServiceImage src={props.serviceimg} alt="service" />
        </StyledServiceImageWrapper>
        <StyledServiceHeadingWrapper>
          <StyledServiceHeading>{props.title}</StyledServiceHeading>
        </StyledServiceHeadingWrapper>
        <StyledServiceContactBtnWrapper>
          <StyledServiceContactBtn>Contact</StyledServiceContactBtn>
        </StyledServiceContactBtnWrapper>
      </StyledProductList>
    </>
  );
};

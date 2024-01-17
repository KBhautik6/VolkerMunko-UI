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
} from "./Product.styled";

export const Service = (props) => {
  return (
    <>
      <StyledProductList>
        <StyledProductMoreInfoImgWrapper>
          <StyledProductMoreInfoImg src={props.moreinfosrc} alt="moreinfo" />
        </StyledProductMoreInfoImgWrapper>
        <StyledServiceImageWrapper>
          <StyledServiceImage src={props.serviceimg} alt="service-image" />
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

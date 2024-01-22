import {
  StyledSection,
  StyledWrapper,
  StyledWrapperInner,
  StyledFooterWrapper,
  StyledFooterIcon,
  StyledFooterDescription,
  StyledFooterHorizontalLine,
  StyledFooterDetails,
  StyledRightContainer,
  StyledVerticalLine,
} from "./Footer.styled";
import footerlogo from "../../../assets/vm-logo-2.png"

export const Footer = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledWrapperInner>
            <StyledFooterWrapper>
              <StyledFooterIcon
                src={footerlogo}
                alt="footerlogo"
              />
              <StyledFooterDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </StyledFooterDescription>
            </StyledFooterWrapper>
          </StyledWrapperInner>
          <StyledFooterHorizontalLine />
          <StyledFooterDetails>
            @2020 Volker Munko
            <StyledRightContainer>
              Privacy policy
              <StyledVerticalLine />
              Imprint
              <StyledVerticalLine />
              Cookie Policy
            </StyledRightContainer>
          </StyledFooterDetails>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInnerWrapper,
  StyledLeftCompleteFinance,
  StyledLeftInner,
  StyledHeadingWrapper,
  StyledHeading,
  StyledCompleteTextWrapper,
  StyledCompleteText,
  StyledButtonWrapper,
  StyledButton,
  StyledRightInner,
  StyledRightContent,
  StyledExcellentHeadingWrapper,
  StyledExcellentHeading,
  StyledRightBox,
  StyledImageBoxWrapper,
  StyledImageWrapper,
  StyledBookImage,
  StyledLine,
  StyledDescriptionWrapper,
  StyledDescription,
} from "./CompleteFinance.styled";

export const CompleteFinance = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledLeftCompleteFinance>
              <StyledLeftInner>
                <StyledHeadingWrapper>
                  <StyledHeading>
                    Competence for
                    <br /> your finances
                  </StyledHeading>
                </StyledHeadingWrapper>
                <StyledCompleteTextWrapper>
                  <StyledCompleteText>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </StyledCompleteText>
                </StyledCompleteTextWrapper>
                <StyledButtonWrapper>
                  <StyledButton>Contact now!</StyledButton>
                </StyledButtonWrapper>
              </StyledLeftInner>
              <StyledRightInner>
                <StyledRightContent>
                  <StyledExcellentHeadingWrapper>
                    <StyledExcellentHeading>
                      EXCELLENT ADVICE
                    </StyledExcellentHeading>
                  </StyledExcellentHeadingWrapper>
                  <StyledRightBox>
                    <StyledImageBoxWrapper>
                      <StyledImageWrapper>
                        <StyledBookImage
                          src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/630c8b70-5069-4d5d-a30d-7bc04bdc3f6d.png"
                          alt="Top-service-Deutschland"
                        />
                      </StyledImageWrapper>
                      <StyledLine>&nbsp;</StyledLine>
                      <StyledImageWrapper>
                        <StyledBookImage
                          src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/76b09a45-c7c0-4adb-a46d-7750ed65d1ab.png"
                          alt="exzellent"
                        />
                      </StyledImageWrapper>
                    </StyledImageBoxWrapper>
                    <StyledDescriptionWrapper>
                      <StyledDescription>
                        We regularly receive awards from independent institutes
                        for our quality in customer advice and service.
                      </StyledDescription>
                    </StyledDescriptionWrapper>
                  </StyledRightBox>
                </StyledRightContent>
              </StyledRightInner>
            </StyledLeftCompleteFinance>
          </StyledInnerWrapper>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

import React from "react";
import {
  StyledCard,
  StyledRightContent,
  StyledDescription,
  StyledHeading,
  StyledRightImage,
  StyledInnerWrapper,
  StyledLeftYourAdvantage,
  StyledSection,
  StyledContainer,
  StyledWrapper,
  StyledRightYourAdvantage,
  Shapeelips,
} from "./YourAdvantage.styled";
export const YourAdvantage=()=> {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledInnerWrapper>
              <StyledCard>
                <StyledRightYourAdvantage>
                  <StyledRightImage src="http://217.160.46.77/assets/images/advantages.png "></StyledRightImage>
                </StyledRightYourAdvantage>
                <StyledLeftYourAdvantage>
                  <StyledHeading>Your advantages at a glance</StyledHeading>
                  <StyledDescription>
                    It is a long established fact that a reader will be
                    distracted
                  </StyledDescription>
                  {/* <Shapeelips> </Shapeelips> */}
                  <StyledRightContent>
                    <p>
                      <li> You take center stage </li>
                      <li> Your finances: easier than ever With the</li>
                      <li> best partners at your side </li>
                    </p>
                  </StyledRightContent>
                </StyledLeftYourAdvantage>
              </StyledCard>
            </StyledInnerWrapper>
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </>
  );
}
import React from "react";
import {
  StyledCard,
  StyledRightContent,
  StyledDescription,
  StyledHeading,
  StyledRightImage,
  StyledRightYourAdvantage,
  StyledSection,
  StyledContainer,
  StyledWrapper,
  StyledRightWrapper,
  StyledLeftYourAdvantage,
  StyledContentList,
  StyledContentNumber,
  StyledContent,
} from "./YourAdvantage.styled";

export const YourAdvantage = () => {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledCard>
              <StyledLeftYourAdvantage>
                <StyledRightImage src="http://217.160.46.77/assets/images/advantages.png "></StyledRightImage>
              </StyledLeftYourAdvantage>
              <StyledRightYourAdvantage>
                <StyledRightWrapper>
                  <StyledHeading>Your advantages at a glance</StyledHeading>
                  <StyledDescription>
                    It is a long established fact that a reader will be
                    distracted
                  </StyledDescription>
                  <StyledRightContent>
                    <StyledContentList>
                      <StyledContentNumber>1</StyledContentNumber>
                      <StyledContent>You are the focus</StyledContent>
                    </StyledContentList>
                    <StyledContentList>
                      <StyledContentNumber>2</StyledContentNumber>
                      <StyledContent>
                        Your finances: easier than ever With the
                      </StyledContent>
                    </StyledContentList>
                    <StyledContentList>
                      <StyledContentNumber>3</StyledContentNumber>
                      <StyledContent>best partners at your side</StyledContent>
                    </StyledContentList>
                  </StyledRightContent>
                </StyledRightWrapper>
              </StyledRightYourAdvantage>
            </StyledCard>
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </>
  );
};

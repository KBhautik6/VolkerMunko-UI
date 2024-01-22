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
import AdvantageImage from "../../assets/group-68.png";

export const YourAdvantage = () => {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledCard>
              <StyledLeftYourAdvantage>
                <StyledRightImage src={AdvantageImage} alt="Advanatages"></StyledRightImage>
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
                        Your finances: easier than ever
                      </StyledContent>
                    </StyledContentList>
                    <StyledContentList>
                      <StyledContentNumber>3</StyledContentNumber>
                      <StyledContent>Best partners at your side</StyledContent>
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

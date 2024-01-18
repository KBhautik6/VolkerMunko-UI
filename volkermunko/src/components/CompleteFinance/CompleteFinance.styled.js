import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;

  @media only screen and (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const StyledInnerWrapper = styled.div`
  padding: 50px 0 100px;
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start;*/
`;

export const StyledLeftCompleteFinance = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyledLeftInner = styled.div``;

export const StyledHeadingWrapper = styled.div`
  font-family: "Nunito-Regular";
  font-size: 3.188rem;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.56px;
  color: #14183e;
  max-width: 565px;
  width: 100%;
  margin: 0 0 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media screen and (max-width: 991px) {
    font-size: 1.5rem;
    line-height: 1.29;
    margin: 0 0 40px 0;
  }
`;

export const StyledHeading = styled.div``;

export const StyledCompleteTextWrapper = styled.div`
  font-family: "Nunito-Regular";
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.72;
  letter-spacing: -0.18px;
  color: #3b3b3c;
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 0.75rem;
    line-height: 1.75;
  }
`;

export const StyledCompleteText = styled.div``;

export const StyledButtonWrapper = styled.button`
  position: relative;
  background: radial-gradient(#fff, #e6e6e6);
  width: 100%;
  max-width: 210px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: transparent;
  margin: 50px 0 20px;
  padding: 10px 20px;
  font-family: "Nunito-Bold";
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: -0.07px;
  color: #14183e;
`;

export const StyledButton = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledRightInner = styled.div``;

export const StyledRightContent = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 0 0 0 100px;

  @media screen and (max-width: 991px) {
    margin: 0;
  }
`;

export const StyledExcellentHeadingWrapper = styled.div`
  font-family: "Nunito-Bold";
  font-size: 1.813rem;
  font-weight: bold;
  line-height: 1.52;
  letter-spacing: -0.29px;
  color: #14183e;
  position: relative;
  padding: 0 0 0 70px;
  margin: 0 0 40px 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    width: 50px;
    background: #3b3b3c;
  }

  @media screen and (max-width: 991px) {
    font-size: 1.063rem;
    padding: 0 0 0 50px;
    margin: 40px 0 20px;

    &::before {
      width: 30px;
    }
  }
`;

export const StyledExcellentHeading = styled.div``;

export const StyledRightBox = styled.div`
  padding: 40px;
  border-radius: 23px;
  border: 1px solid #cfcfcf;

  @media screen and (max-width: 991px) {
    padding: 30px;
    margin: 30px;
  }
`;

export const StyledImageBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBookImage = styled.img`
  max-width: 70%;
`;

export const StyledLine = styled.div`
  background: #cfcfcf;
  width: 1px;
  height: 130px;
  margin: 0 30px;
`;

export const StyledDescriptionWrapper = styled.div`
  font-family: "Nunito-Medium";
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.75;
  letter-spacing: -0.16px;
  color: #707684;
  text-align: center;
  margin: 40px 0 0;

  @media screen and (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

export const StyledDescription = styled.div`
  margin: 0;
  padding: 0;
`;

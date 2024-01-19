import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 100px 0;
  margin: 800px 0 -800px 0;

  @media screen and (max-width: 991px) {
    padding: 50px 0;
    margin: 3300px 0 0 0;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
  background-color: #ffffff;
  /* padding: 0 0 0 75px; */

  @media screen and (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  height: 590px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) and (max-width: 991px) {
    height: auto;
    padding: 15px;
  }
`;

export const StyledLeftYourAdvantage = styled.div``;

export const StyledRightImage = styled.img`
  max-width: 520px;
  width: 100%;
  position: relative;
  top: -7px;

  @media screen and (max-width: 991px) {
    max-width: 400px;
  }
`;

export const StyledRightWrapper = styled.div`
  margin: 0 70px 0 0;

  @media screen and (max-width: 991px) {
    margin: 30px 0 0;
  }
`;

export const StyledRightYourAdvantage = styled.div`
  width: 50%;

  @media screen and (max-width: 991px) {
    width: 100%;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const StyledHeading = styled.div`
  font-family: "Quicksand-Bold";
  font-size: 51px;
  line-height: 72px;
  color: #14183e;
  max-width: 565px;
  width: 100%;
  margin: 0 0 20px;
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
    text-align: center;
    font-size: 22px;
    line-height: 27px;
    margin: 0 0 20px 0;

    &::before {
      width: 260px;
    }
  }
`;

export const StyledDescription = styled.p`
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 1.72;
  color: #3b3b3c;
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: 12px;
    line-height: 22px;
  }
`;

export const StyledRightContent = styled.ul`
  margin: 50px 0 0;
  list-style: none;
  list-style-type: none;

  @media screen and (max-width: 991px) {
    margin: 20px 0 0;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  height: 590px;
  margin: 19px 0 1px;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 720px;
    margin: 0 auto;
  }
`;

export const StyledContentList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 25px 0;

  @media screen and (max-width: 991px) {
    margin: 0 0 15px 0;
  }
`;

export const StyledContentNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#767678, #3b3b3c);
  width: 34px;
  height: 34px;
  border-radius: 50px;
  margin: 0 25px 0 0;
  padding: 10px;
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 12px;
  color: #ffffff;

  @media screen and (max-width: 991px) {
    font-size: 12px;
    width: 16px;
    height: 16px;
    margin: 0 15px 0 0;
  }
`;

export const StyledContent = styled.p`
  font-family: " Nunito-SemiBold";
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  color: #37415c;

  @media screen and (max-width: 991px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

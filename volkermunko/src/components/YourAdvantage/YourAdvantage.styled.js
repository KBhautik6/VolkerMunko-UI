import styled from "styled-components";

export const StyledSection = styled.div``;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #FFFFFF;
  padding: 0px 0px 0px 75px;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

export const StyledWrapper = styled.div`
  margin: 20px;
  position: relative;
  padding: 125px 0 30px;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  @media (max-width: 991px) {
    /* flex-direction: column; */
  }
`;
export const StyledRightYourAdvantage = styled.div`
  width: 50%;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media screen and  (max-width: 991px) {
    width: 100%;
  }
`;

export const StyledLeftYourAdvantage = styled.div`
  width: 50%;

  @media screen and (max-width: 991px) {
    width: 100%;
  }

  @media screen and  (max-width: 991px) {
    width: 100%;
  }
`;
export const StyledHeading = styled.div`
  color: #000000;
  font-family: 'Nunito-Regular';
  font-size: 55px;
  line-height: 70px;
  padding: 9px 9px 20px 15px;
  
  @media screen and  (max-width: 991px) {
    padding: 0px 0px 0px 22px;
    font-size: 39px;
    line-height: 35px;
  }
`;

export const StyledDescription = styled.p`
  height: 13px;
  font-family:'Nunito-Regular';
  font-size: 16px;
  line-height: 2.19;
  text-align: left;
  color: #37415C;
  padding: 0 0 0 25px;
`;

export const StyledRightContent = styled.div`
  margin: 4px 0 3px 28px;
  font-family: 'Nunito-Regular';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.75;
  text-align: left;
  color: #37415C;
`;
export const StyledRightImage = styled.img`
  width: 100%;
  max-width: 477px;
  padding: 16px 0 0 10px;
  
  @media screen and  (max-width: 991px) {
    padding: 38px 0px 0px 0px;
    max-width: 400px;
  }
`;
// export const Shapeelips = styled.div`
//   width: 34px;
//   height: 34px;
//   margin: 0 28px 0 0;
//   padding: 6px 12px;
// `;
export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  height: 590px;
  margin: 19.5px 0 1px;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media screen and  (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 720px;
    margin: 0 auto;
  }
`;
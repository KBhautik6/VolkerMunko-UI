import styled from "styled-components";

export const StyledSection = styled.section`
  background-image: url('https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/b8ebc7b6-3e25-4f50-a136-6d9bbcc23102.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: max-content;
  }
`;

export const StyledWrapperInner = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0 118px;

  @media screen and (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;

export const StyledFooterIcon = styled.img`
  padding: 65px 0 0 0;
  width: 100%;
  max-width: 188px;
  height: 112px;

  @media screen and (max-width: 991px) {
    max-width: 86px;
    height: 67px;
    padding: 113px 0 0 0;
  }
`;

export const StyledFooterDescription = styled.div`
  padding: 12px 0 0 0;
  text-align: center;
  color: #ffffff;
  line-height: 32px;
  font-family: "Quicksand-Bold";
`;

export const StyledFooterHorizontalLine = styled.hr`
  margin: 100px 0 0 0;
  background-color: #ffffff;

  @media screen and (max-width: 991px) {
    margin: 50px 0 0 0;
  }
`;

export const StyledFooterDetails = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 0 19px 20px;
  padding:33px 120px 33px 118px;
  font-family: "Nunito-Regular";

  @media screen and (max-width: 991px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
`;

export const StyledVerticalLine = styled.div`
  height: 12px;
  width: 0;
  border: 1px solid #000000;
  margin: 0 12px 0;
`;

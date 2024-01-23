import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 60px 0;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
`;
export const Iframe = styled.iframe`
  width: 400px;
  height: 400px;
  border-radius: 20px;

  @media screen and (max-width: 991px) {
  }
`;

export const StyledContactLeft = styled.div`
  width: 49%;
  margin: 175px 0 0 45px;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
`;

export const StyledMapWrapper = styled.div`
  width: 100%;
  max-width: 50%;

  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledMapIframe = styled.iframe`
  width: 450px;
  height: 400px;
  border: 0;
  border-radius: 22px;

  @media screen and (max-width: 991px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledContactRight = styled.div`
  width: 49%;
  margin: 100px 0 0;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const StyledContactRightWrapper = styled.div``;

export const StyledContact = styled.h3`
  font-family: "Nunito-Regular";
  font-weight: 600;
  margin: 0 0 0 23px;
  line-height: 28px;
  text-align: left;
  color: #14183e;

  &:before {
    content: "";
    position: absolute;
    margin: 13px 0 0 -30px;
    height: 2px;
    width: 22px;
    background: #3b3b3c;
  }

  @media screen and (max-width: 991px) {
    font-size: 17px;
    padding: 0 0 0 30px;
    margin: 50px 0 20px;

    &:before {
      width: 20px;
    }
  }
`;

export const StyledContactHeadingWrapper = styled.div`
  position: relative;
`;

export const StyledContactHeading = styled.h2`
  margin: 0 0 9px;
  font-family: "Nunito-Bold";
  font-size: 51px;
  font-weight: 700;
  line-height: 76px;
  text-align: left;
  color: #14183e;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    max-width: 327px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 30px 0;

    &::before {
      height: 30px;
    }
  }
`;

export const StyledContactAddressWrapper = styled.div`
  display: flex;
  margin: 35px 0;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledMapIcon = styled.img`
  max-width: 60px;
`;

export const StyledMapAddress = styled.p`
  margin: 10px 0 0px 35px;
  font-family: "Nunito-Bold";
  font-size: 20px;

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #14183e;
`;

export const StyledPhoneNumberWrapper = styled.div`
  display: flex;
  margin: 35px 0;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledPhoneIcon = styled.img`
  max-width: 60px;
`;

export const StyledPhoneNumber = styled.p`
  margin: 10px 0 0px 35px;
  font-family: "Nunito-Bold";
  font-size: 20px;

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const StyledMailWrapper = styled.div`
  display: flex;
  margin: 35px 0;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    margin: 0 0 10px -40px;
  }
`;

export const StyledMailIcon = styled.img`
  max-width: 60px;
`;

export const StyledMail = styled.div`
  margin: 10px 0 0px 35px;
  font-size: 20px;
  font-family: "Nunito-Bold";

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

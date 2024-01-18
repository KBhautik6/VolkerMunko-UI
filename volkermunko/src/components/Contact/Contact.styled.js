import styled from "styled-components";
import { GlobalStyles } from "../Global.styled";

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
  margin: 175px 0 0 145px;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
`;

export const StyledMapWrapper = styled.div`
  width: 512px;
  height: 587px;
  margin: 120px 0 0;

  @media screen and (max-width: 991px) {
    width: 100px;
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
  line-height: 1.5;
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
    font-size: 16px;
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
  font-family: "Nunito-Regular";
  font-size: 51px;
  font-weight: 700;
  line-height: 1.5;
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
`;

export const StyledContactAddressWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

export const StyledMapIcon = styled.img``;

export const StyledMapAddress = styled.p`
  margin: 10px 0 0px 35px;
  font-family: "Nunito-Regular";
`;

export const StyledPhoneNumberWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

export const StyledPhoneIcon = styled.img``;

export const StyledPhoneNumber = styled.p`
  margin: 10px 0 0px 35px;
  font-family: "Nunito-Regular";
`;

export const StyledMailWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

export const StyledMailIcon = styled.img``;

export const StyledMail = styled.div`
  margin: 10px 0 0px 35px;
  font-family: "Nunito-Regular";
`;

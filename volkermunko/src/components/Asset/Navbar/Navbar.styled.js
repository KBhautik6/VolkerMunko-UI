import styled from "styled-components";
import { theme } from "../../theme";

export const StyledNavbarSection = styled.section``;

export const StyledNavbarWrapper = styled.div`
  background-color: ${theme.whiteNine};
`;

export const StyledNavbarInner = styled.div`
  margin: 0 19px 20px;
  padding: 33px 90px 0 88px;

  @media screen and (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const StyledNavbarLogoWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  height: 71px;
  object-fit: contain;

  @media screen and (max-width: 991px) {
    margin: 12px 71px 6px 12px;
  }
`;

export const StyledNavbarLogo = styled.img`
  position: relative;
  width: 100%;
  max-width: 108px;
  height: 63px;
`;

export const StyledNavbarWhyWrapper = styled.div`
  width: 100%;
  max-width: 272px;
  height: 27px;
  font-family: Nunito-SemiBold;
  font-size: 18px;
  line-height: 12px;
  letter-spacing: 2px;
  text-align: left;
  color: ${theme.blackThirdSecond};
  margin: 22px 24px 19px 1px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const StyledNavbarFlexHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavbarAboutWrapper = styled.div`
  width: 100%;
  max-width: 110px;
  height: 27px;
  margin: 27px 13px 4px 3px;
  font-family: Nunito-SemiBold;
  font-size: 20px;
  line-height: 2px;
  text-align: left;
  color: ${theme.blackThirdSecond};

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const StyledContactButton = styled.button`
  width: 100%;
  max-width: 136px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.white};
  margin: 5px 0px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const StyledNavbarContactWrapper = styled.p`
  font-family: Nunito-SemiBold;
  font-size: 16px;
  font-weight: 900;
  line-height: 3px;
  color: ${theme.blackThird};

  @media (max-width: 991px) {
    display: none;
  }
`;

export const StyledNavbarBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 991px) {
    max-width: 67px;
  }
`;

export const StyledHamburgerNavbar = styled.img`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    width: 100%;
    max-width: 21px;
    height: 14px;
    position: absolute;
    margin: 20px 0 0 0;
  }
`;

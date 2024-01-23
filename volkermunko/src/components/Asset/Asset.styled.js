import styled from "styled-components";

export const StyledNavbarContactButton = styled.button`
  display: none;

  @media screen and (min-width: 991px) {
    display: inline;
    float: left;
    width: 136px;
    height: 50px;
    margin: -16px 20px;
    padding: 15px 41px 13px 38px;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: #fff;
    font-family: "Quicksand-Bold";
    font-size: 16px;

    &:hover {
      background-image: radial-gradient(#767678, #3b3b3c);
      color: #ffffff;
    }
  }
`;

export const StyledSection = styled.section`
  background: linear-gradient(180deg, #f8f8f8, #fff);
  position: relative;

  @media screen and (max-width: 991px) {
    margin: 10px;
  }
`;

export const StyledWrapper = styled.div`
  background: url("https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/315bba66-2840-4652-bca2-8c3ccf59bcb2.png")
    no-repeat;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    background-size: contain;
    height: auto;
  }

  @media screen and (max-width: 991px) {
    background: none;
  }
`;

export const StyledInner = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyledNavbarContent = styled.div``;

export const StyledLeftContent = styled.div``;

export const StyledLeftContentHeading = styled.h3`
  font-family: "Quicksand-Bold";
  font-size: 54px;
  line-height: 76px;
  color: #14183e;
  max-width: 565px;
  width: 100%;
  margin: 60px 0 40px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 40px 0;
  }
`;

export const StyledLeftContentText = styled.div`
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 27px;
  color: #3b3b3c;
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 10px;
    line-height: 21px;
  }
`;
export const StyledBannerImageWrapper = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    width: 100%;
  }
`;

export const StyledBannerImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 30px 0 0;

  @media screen and (max-width: 991px) {
    max-width: 270px;
    width: 100%;
  }
`;

export const StyledLeftButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 210px;
  height: 50px;
  border-radius: 12px;
  margin: 50px 0 20px;
  padding: 10px 20px;
  font-family: "Nunito-Bold";
  font-size: 1;
  line-height: 27px;
  color: #ffffff;

  @media screen and (max-width: 991px) {
    margin: 20px 0 0 0;
    height: 50px;
    font-size: 14px;
    max-width: 100%;
  }
`;

export const StyledLeftBtn = styled.button`
  text-align: center;
  font-family: "Nunito-Regular";
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-image: radial-gradient(#767678, #3b3b3c);
  border-radius: 10px;
  padding: 19px 56px;
  cursor: pointer;
`;

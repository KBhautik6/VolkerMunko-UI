import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const StyledWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  height: 747px;
  background-image: linear-gradient(to bottom, #f8f8f8, #fff);

  @media screen and (min-width: 747px) and (max-width: 1200px) {
    max-width: 1100px;
    width: 100%;
    height: 747px;
  }
`;

export const StyledInner = styled.div``;

export const StyledNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  max-width: 1330;
  width: 100%;
  height: 105px;
`;

export const StyledNavbarLogo = styled.img`
  width: 120px;
  height: 72px;
  padding: 34px 0 0 125px;
`;

export const StyledNavbarTextWrapper = styled.div`
  list-style: none;
  margin: 18px 100px 0 0;
`;

export const StyledNavbarWhyAssetMangement = styled.li`
  display: none;

  @media screen and (min-width: 991px) {
    display: inline;
    float: left;
    width: 217px;
    height: 27px;
    font-family: "Nunito";
    font-size: 20px;
    font-weight: 600;
    line-height: 0.65;
    letter-spacing: -0.2px;
    color: #37415c;
    margin: 0 20px;
  }
`;

export const StyledNavbarAboutUs = styled.li`
  display: none;

  @media screen and (min-width: 991px) {
    display: inline;
    float: left;
    width: 84px;
    height: 27px;
    font-family: "Nunito";
    font-size: 20px;
    font-weight: 600;
    line-height: 0.65;
    letter-spacing: -0.2px;
    color: #37415c;
    margin: 0 20px;
  }
`;

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
    font-family: "Nunito";
    font-size: 16px;
  }
`;
// export const StyledMobileViewWrapper=styled.div`
// `

// export const StyledMobileView=styled.img`
// display:none;
// @media screen(){

// }
// `

export const StyledNavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyledLeftContent = styled.div`
  margin: 0 0 0 100px;
  width: 49%;
`;

export const StyledLeftContentHeading = styled.h3`
  width: 351px;
  height: 149px;
  font-family: "Nunito";
  font-size: 56px;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.56px;
  text-align: left;
  color: #14183e;

  @media screen and (max-width: 991px) {
    width: 188px;
    height: 79px;
    /* margin: 0 105px 0 0; */
    /* font-family: Quicksand; */
    font-size: 30px;
    line-height: 1.37;
    letter-spacing: -0.3px;
    text-align: left;
    color: #14183e;
  }
`;

export const StyledLeftContentText = styled.div`
  width: 562px;
  height: 86px;
  font-family: Nunito;
  font-size: 18px;
  line-height: 1.72;
  letter-spacing: -0.18px;
  color: #37415c;
`;

export const StyledLeftButtonWrapper = styled.div`
  width: 207px;
  height: 60px;
  margin: 66px 0 0 0;
`;

export const StyledLeftBtn = styled.button`
  font-family: "Rubik";
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3b3b3c;
  border-radius: 10px;
  padding: 19px 56px;
`;

export const StyledRightContent = styled.div`
  width: 49%;
  margin: 20px 0 0 100px;
`;

export const StyledRightInner = styled.div``;

export const StyledRightImage = styled.img`
  width: 562.3px;
  height: 542.7px;
  object-fit: contain;
  margin: 0 9px -100px -72px;
`;

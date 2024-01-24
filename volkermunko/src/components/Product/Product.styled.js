import styled from "styled-components";
import { backgroundImageContact } from "../index";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    background: url(${backgroundImageContact}) no-repeat;
    height: 100px;
    width: 100%;
    background-size: 100%;
    background-position: center top;
    position: absolute;
    top: -50px;
    z-index: -1;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  height: 747px;
  background-image: linear-gradient(to bottom, #f8f8f8, #fff);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
  }

  @media screen and (min-width: 747px) and (max-width: 1200px) {
    max-width: 1100px;
    width: 100%;
    height: 747px;
  }
`;

export const StyledWrapperInner = styled.div``;

export const StyledProductCurve = styled.img`
  width: 1336px;
  height: 2198px;
  object-fit: contain;
  background-color: #f8f8f8;
  position: relative;
`;

export const StyledProductContent = styled.div``;

export const StyledProductHeadingWrapper = styled.div``;

export const StyledProductHeading = styled.h3`
  text-align: center;
  font-family: "Quicksand-bold";
  font-size: 51px;
  line-height: 78px;
  color: #14183e;
`;

export const StyledProductContentText = styled.p`
  margin: 3px 214px 48px;
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  color: #37415c;

  @media screen and (max-width: 991px) {
    margin: 24px 2px 23px 1px;
    font-family: "Nunito-Regular";
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #37415c;
  }
`;

export const StyledProductServicesWrapper = styled.div``;

export const StyledProductServices = styled.div``;

export const StyledProductServicesList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledProductList = styled.li`
  position: relative;
  max-width: 295px;
  width: 100%;
  height: 400px;
  margin: 89px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: solid 1px #e9e5e5;
  background-color: #fff;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
    color: #ffffff;

    &::before {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable EnglishLorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englishthat it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #414143;
      color: #ffffff;
      padding: 20px;
      box-sizing: border-box;
      transform: rotateY(360deg);
      transform-origin: top;
      transition: transform 0.3s ease;
    }
  }
  @media screen and (max-width: 767px) {
    margin: 0 0 20px 0;
  }
`;

export const StyledProductMoreInfoImgWrapper = styled.div`
  text-align: right;

  ${StyledProductList}:hover & {
    text-align: right;
  }
`;

export const StyledProductMoreInfoImg = styled.img`
  width: 38px;
  height: 38px;
  text-align: center;
  object-fit: contain;

  ${StyledProductList}:hover & {
    text-align: center;
  }
`;

export const StyledServiceImageWrapper = styled.div`
  text-align: center;
`;

export const StyledServiceImage = styled.img`
  width: 139px;
  height: 139px;
  object-fit: contain;
`;

export const StyledServiceHeadingWrapper = styled.div`
  text-align: center;
  margin: 75px 0 0 0;
`;

export const StyledServiceHeading = styled.h4`
  width: 100%;
  background-color: #fff;
`;

export const StyledServiceContactBtnWrapper = styled.div`
  text-align: center;
`;

export const StyledServiceContactBtn = styled.button`
  width: 188px;
  height: 50px;
  background-color: #ebebeb;
  color: #14183e;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const StyledProductCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPrivateBox = styled.div`
  width: 100%;
  max-width: 244px;
  height: 41px;
  border-radius: 36px;
  background-color: #474748;
`;

export const StyledPrivateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  color: #fff;
  margin: 0;
  text-shadow: 4px 4px 20px #fff;
  font-family: "Nunito-Regular";

  @media screen and (max-width: 991px) {
    font-size: 9px;
  }
`;

export const StyledProductCustomWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 493px;
  height: 41px;
  border-radius: 36px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px #eee0e4;
  background-color: #fff;

  @media screen and (max-width: 991px) {
    max-width: 331px;
    font-size: 12px;
  }
`;

export const StyledCustomIcon = styled.img`
  width: 100%;
  max-width: 13px;
`;

export const StyledCorporateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 9px 23px;
  color: #000;
  margin: 0;
  text-shadow: 4px 4px 20px #fff;
  font-family: "Nunito-Regular";
`;

import styled from "styled-components";
import { FaUser } from "react-icons/fa";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  position:relative;
`;

export const StyledWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  height: 747px;
  background-image: linear-gradient(to bottom, #f8f8f8, #fff);
  &::before{
    content:"";
    position:absolute;
    background-image:url('https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/4c70244a-b294-4264-9b08-d933a2910183.svg');
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
  height: 2197.4px;
  object-fit: contain;
  background-color: #f8f8f8;
  position: relative;
`;

export const StyledProductContent = styled.div``;

export const StyledProductHeadingWrapper = styled.div``;

export const StyledProductHeading = styled.h3`
  text-align: center;
  font-family:"Nunito-Bold";
  font-size: 51px;
  font-weight: bold;
  line-height: 1.55;
  letter-spacing: -0.51px;
  color: #14183e;
`;

export const StyledProductContentText = styled.p`
  margin: 2.6px 214px 48px;
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 2.19;
  letter-spacing: -0.16px;
  text-align: center;
  color: #37415c;

  @media screen and (max-width: 991px) {
    margin: 24px 2px 23px 1px;
    font-family: "Nunito";
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: -0.12px;
    text-align: center;
    color: #37415c;
  }
`;

export const StyledProductButtonWrapper = styled.div`
  margin: auto;
  text-align: center;
  width: 400px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  background-color: #ffffff;

  @media screen and (max-width: 991px) {
    margin: auto;
    text-align: center;
    width: 208px;
    height: 15px;
  }
`;

export const StyledProductBtn = styled.div`
  cursor: pointer;
`;

export const StyledProductPrivateBtn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  color: #ffffff;
  background-color: #3f3f40;
  border: none;

  @media screen and (max-width: 991px) {
    width: 104px;
    height: 15px;
    margin: 0 0 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 0.75;
    letter-spacing: -0.12px;
    text-align: center;
    color: #fff;
  }
`;

export const StyledProductCorporateBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50px;
  border: none;

  @media screen and (max-width: 991px) {
    width: 104px;
    height: 15px;
    margin: 0 0 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 0.75;
    letter-spacing: -0.12px;
    text-align: center;
  }
`;

export const PrivateIcon = styled(FaUser)`
  margin-right: 20px;
`;

export const CorporateIcon = styled(FaUser)`
  margin-right: 20px;
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
  width: 295px;
  height: 400px;
  margin: 89px 0 38px 30px;
  padding: 25.6px 28px 42px 35.2px;
  border-radius: 20px;
  border: solid 1px #e9e5e5;
  background-color: #fff;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
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
`;

export const StyledProductMoreInfoImgWrapper = styled.div`
  text-align: right;

  ${StyledProductList}:hover & {
    visibility: visible;
  }
`;

export const StyledProductMoreInfoImg = styled.img`
  width: 38.3px;
  height: 38.3px;
  text-align: center;
  object-fit: contain;

  ${StyledProductList}:hover & {
    visibility: visible;
  }
`;

export const StyledServiceImageWrapper = styled.div`
  text-align: center;
`;

export const StyledServiceImage = styled.img`
  width: 137.4px;
  height: 139px;
  object-fit: contain;
`;

export const StyledServiceHeadingWrapper = styled.div`
  text-align: center;
  margin: 75px 0px 0 0px;
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

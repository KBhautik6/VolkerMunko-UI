import styled from "styled-components";
import {theme} from "../theme"

export const StyledProductServicesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const StyledProductList = styled.li`
  position: relative;
  max-width: 295px;
  width: 100%;
  height: 400px;
  margin: 89px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: 1px solid  ${theme.pinkLightSecond};
  background-color: ${theme.white};
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.black};
    color: ${theme.white};

    &::before {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable EnglishLorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englishthat it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color:${theme.grayFourThird};
      color: ${theme.white};
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
  background-color: ${theme.white};
`;

export const StyledServiceContactBtnWrapper = styled.div`
  text-align: center;
`;

export const StyledServiceContactBtn = styled.button`
  width: 188px;
  height: 50px;
  background-color: ${theme.grayOne};
  color:${theme.darkBlue};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
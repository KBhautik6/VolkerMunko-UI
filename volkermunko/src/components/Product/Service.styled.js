import styled from "styled-components";
import { theme } from "../theme";

export const StyledWrapper = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: relative;
  transition: opacity 0.3s ease;
  display:block;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledBack = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
    display:block;
  }
`;


export const StyledFront = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: relative;
  display:block;
`;

export const StyledBackCard = styled.li`
  max-width: 295px;
  width: 100%;
  height: 400px;
  margin: 89px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: 1px solid ${theme.pinkLightSecond};
  background-color: ${theme.black};
  color: ${theme.white};
  overflow: hidden;
  opacity: 1; 
  transition: opacity 0.3s ease;
  

`;

export const StyledProductList = styled.li`
  position: relative;
  max-width: 295px;
  width: 100%;
  height: 400px;
  margin: 89px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: 1px solid ${theme.pinkLightSecond};
  background-color: ${theme.white};
  overflow: hidden;
  transition: background-color 0.3s ease;

  @media screen and (max-width: 767px) {
    margin: 0 0 20px 0;
  }

  &:hover {
    ${StyledBackCard} {
      opacity: 1;
    }
  }
`

export const StyledProductMoreInfoImgWrapper = styled.div`
  text-align: right;
`;

export const StyledProductMoreInfoImg = styled.img`
  width: 38px;
  height: 38px;
  text-align: center;
  object-fit: contain;

  &:hover & {
    display: none;
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
  color: ${theme.darkBlue};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const StyledBackDescription=styled.div``
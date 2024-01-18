import styled from "styled-components";
import { GlobalStyles } from "../Global.styled";

export const StyledSection = styled.section`
  position: relative;
  background: url("https://i.postimg.cc/JhLD8Bb7/wealthmanagement.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 1260.3px;
  margin-top: 900px;

  &:before {
    content: "";
    background: url("https://i.postimg.cc/g2SBj5yr/househand.png");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 560px 620px;
    width: 560px;
    height: 620px;
    position: absolute;
    right: 0;
    top: 167px;
  }
`;

export const StyledWrapper = styled.div``;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 180px 0;
`;

export const StyledWealthLeft = styled.div`
  max-width: 530px;
  width: 100%;
`;

export const StyledWealthLeftWrapper = styled.div``;

export const StyledHeading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  font-family: "Nunito-Bold";
  font-size: 52px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.51px;
  color: #ffffff;
  margin: 0 0 120px 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -50px;
    height: 5px;
    width: 190px;
    background: #ffffff;
  }
`;

export const StyledWealthListWrapper = styled.ul`
  list-style: none;
`;

export const StyledWealthList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 15px 0;
  max-width: 490px;
  width: 100%;
  font-family: "Nunito-Regular";
`;

export const StyledWealthCorrectIcon = styled.div`
  margin: 30px 30px 0 0;
`;

export const StyledWealthListText = styled.p`
  font-family: "Nunito";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.75;
  color: #f3f3f3;
`;

export const StyledWealthRight = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;
`;

export const StyledWealthRightInner = styled.div``;

export const StyledWealthRightList = styled.ul`
  margin-top: 550px;
  list-style: none;
`;

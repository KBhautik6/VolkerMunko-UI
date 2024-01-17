import React from "react";
import {
  StyledWealthList,
  StyledWealthCorrectIcon,
  StyledWealthListText,
} from "./WealthManagement.styled";

export const WealthProps = (props) => {
  return (
    <>
      <StyledWealthList>
        <StyledWealthCorrectIcon>
          <img
            src={props.wicon}
            alt="tickIcon"
          />
        </StyledWealthCorrectIcon>
        <StyledWealthListText>
            {props.wtext}
        </StyledWealthListText>
      </StyledWealthList>
    </>
  );
};

export default WealthProps;

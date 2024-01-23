import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledContainer,
  StyledInnerWrapper,
  StyledWealthLeft,
  StyledWealthLeftWrapper,
  StyledHeading,
  StyledWealthListWrapper,
  StyledWealthRight,
  StyledWealthRightInner,
  StyledWealthRightList,
} from "./WealthManagement.styled";
import { WealthProps } from "./WealthProps";
import { Wdata, WdataSecond } from "../Data";

export const WealthManagement = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledContainer>
            <StyledInnerWrapper>
              <StyledWealthLeft>
                <StyledWealthLeftWrapper>
                  <StyledHeading>
                    Wealth management consulting with a seal of approval in
                    Vlotho
                  </StyledHeading>
                  <StyledWealthListWrapper>
                    {Wdata.map((item) => (
                      <WealthProps
                        key={item.id}
                        wicon={item.wicon}
                        wtext={item.wtext}
                      />
                    ))}
                  </StyledWealthListWrapper>
                </StyledWealthLeftWrapper>
              </StyledWealthLeft>
              <StyledWealthRight>
                <StyledWealthRightInner>
                  <StyledWealthRightList>
                    {WdataSecond.map((item) => (
                      <WealthProps
                        key={item.id}
                        wicon={item.wicon}
                        wtext={item.wtext}
                      />
                    ))}
                  </StyledWealthRightList>
                </StyledWealthRightInner>
              </StyledWealthRight>
            </StyledInnerWrapper>
          </StyledContainer>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

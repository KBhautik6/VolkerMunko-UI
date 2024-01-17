import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledInner,
  StyledNavbarWrapper,
  StyledNavbarLogo,
  StyledNavbarTextWrapper,
  StyledNavbarWhyAssetMangement,
  StyledNavbarAboutUs,
  StyledNavbarContactButton,
  StyledMobileViewWrapper,
  StyledMobileView,
  StyledNavbarContent,
  StyledLeftContent,
  StyledLeftContentHeading,
  StyledLeftContentText,
  StyledLeftButtonWrapper,
  StyledLeftBtn,
  StyledRightContent,
  StyledRightInner,
  StyledRightImage,
} from "./Asset.styled";

export const AssetManagement = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledInner>
            <StyledNavbarWrapper>
              <StyledNavbarLogo
                src="https://i.ibb.co/5jMVxY6/logo-navbar.jpg"
                alt="Navbar Logo"
              />
              <StyledNavbarTextWrapper>
                <StyledNavbarWhyAssetMangement>
                  Why asset management
                </StyledNavbarWhyAssetMangement>
                <StyledNavbarAboutUs>About Us</StyledNavbarAboutUs>
                <StyledNavbarContactButton>Contact</StyledNavbarContactButton>
              </StyledNavbarTextWrapper>
              {/* <StyledMobileViewWrapper>
                <StyledMobileView src="https://i.ibb.co/ZKGPHPg/3-bars.jpg" alt="navbar"/>
              </StyledMobileViewWrapper> */}
            </StyledNavbarWrapper>

            <StyledNavbarContent>
              <StyledLeftContent>
                <StyledLeftContentHeading>
                  Asset Management
                </StyledLeftContentHeading>
                <StyledLeftContentText>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </StyledLeftContentText>
                <StyledLeftButtonWrapper>
                  <StyledLeftBtn>Contact Us</StyledLeftBtn>
                </StyledLeftButtonWrapper>
              </StyledLeftContent>
              <StyledRightContent>
                <StyledRightInner>
                  <StyledRightImage
                    src="https://i.ibb.co/cF0WrFQ/Group-10811.jpg"
                    alt="person-img"
                  />
                </StyledRightInner>
              </StyledRightContent>
            </StyledNavbarContent>
          </StyledInner>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

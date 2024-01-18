import React from "react";
import {
  StyledNavbarWrapper,
  StyledNavbarLogo,
  StyledNavbarTextWrapper,
  StyledNavbarWhyAssetMangement,
  StyledNavbarAboutUs,
  StyledNavbarContactButton,
  StyledMobileViewWrapper,
  StyledMobileView,
} from "../Asset.styled";

export const Navbar = () => {
  return (
    <>
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
              </StyledMobileViewWrapper>*/}
      </StyledNavbarWrapper>
    </>
  );
};

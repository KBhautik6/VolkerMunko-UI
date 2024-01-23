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
import NavbarLogo from "../../../assets/vm-logo.png";
import HamburgerNavbar from "../../../assets/group-15.jpeg";

export const Navbar = () => {
  return (
    <>
      <StyledNavbarWrapper>
        <StyledNavbarLogo src={NavbarLogo} alt="Navbar Logo" />
        <StyledNavbarTextWrapper>
          <StyledNavbarWhyAssetMangement>
            Why asset management
          </StyledNavbarWhyAssetMangement>
          <StyledNavbarAboutUs>About Us</StyledNavbarAboutUs>
          <StyledNavbarContactButton>Contact</StyledNavbarContactButton>
        </StyledNavbarTextWrapper>
        <StyledMobileViewWrapper>
          <StyledMobileView src={HamburgerNavbar} alt="navbar" />
        </StyledMobileViewWrapper>
      </StyledNavbarWrapper>
    </>
  );
};

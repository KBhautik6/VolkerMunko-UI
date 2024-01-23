import React from "react";
import {
  StyledNavbarSection,
  StyledNavbarWrapper,
  StyledNavbarInner,
  StyledNavbarFlex,
  StyledNavbarLogo,
  StyledNavbarLogoWrapper,
  StyledNavbarBoxWrapper,
  StyledNavbarWhyWrapper,
  StyledContactButton,
  StyledNavbarAboutWrapper,
  StyledNavbarContactWrapper,
  StyledHamburgerNavbar,
} from "./Navbar.styled";
import NavbarLogo from "../../../assets/vm-logo.png";
import HamburgerNavbar from "../../../assets/group-15.jpeg";

export const Navbar = () => {
  return (
    <>
      <StyledNavbarSection>
        <StyledNavbarWrapper>
          <StyledNavbarInner>
            <StyledNavbarFlex>
              <StyledNavbarLogoWrapper>
                <StyledNavbarLogo src={NavbarLogo} alt="Vm-logo" />
              </StyledNavbarLogoWrapper>
              <StyledNavbarBoxWrapper>
                <StyledNavbarWhyWrapper>
                  Why asset management
                </StyledNavbarWhyWrapper>
                <StyledNavbarAboutWrapper>About Us</StyledNavbarAboutWrapper>
                <StyledContactButton>
                  <StyledNavbarContactWrapper>
                    contact
                  </StyledNavbarContactWrapper>
                </StyledContactButton>
                <StyledHamburgerNavbar
                  src={HamburgerNavbar}
                  alt="HamburgerNavbar"
                />
              </StyledNavbarBoxWrapper>
            </StyledNavbarFlex>
          </StyledNavbarInner>
        </StyledNavbarWrapper>
      </StyledNavbarSection>
    </>
  );
};

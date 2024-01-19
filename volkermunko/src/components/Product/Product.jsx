import React from "react";
import {
  StyledSection,
  StyledWrapper,
  StyledWrapperInner,
  StyledProductCurve,
  StyledProductContent,
  StyledProductHeadingWrapper,
  StyledProductHeading,
  StyledProductContentText,
  StyledProductCustom,
  StyledProductCustomWrapper,
  StyledPrivateBox,
  StyledPrivateWrapper,
  StyledCustomIcon,
  StyledCorporateWrapper,
  StyledProductServicesWrapper,
  StyledProductServices,
  StyledProductServicesList,
} from "./Product.styled";
import { Data } from "./Data";
import { Service } from "./Service";

export const Product = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledWrapperInner>
            <StyledProductContent>
              <StyledProductHeadingWrapper>
                <StyledProductHeading>Product & Solutions</StyledProductHeading>
              </StyledProductHeadingWrapper>
              <StyledProductContentText>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point aseof using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </StyledProductContentText>

              <StyledProductCustom>
                <StyledProductCustomWrapper>
                  <StyledPrivateBox>
                    <StyledPrivateWrapper>
                      <StyledCustomIcon src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/c70281c9-0291-40f2-b9de-25076eb94b2c.svg" />
                      Private Customer
                    </StyledPrivateWrapper>
                  </StyledPrivateBox>
                  <StyledCorporateWrapper>
                    <StyledCustomIcon src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/8552f735-7b7e-46df-8298-8509c7c5eb19.svg" />
                    Corporate Customers
                  </StyledCorporateWrapper>
                </StyledProductCustomWrapper>
              </StyledProductCustom>

              <StyledProductServicesWrapper>
                <StyledProductServices>
                  <StyledProductServicesList>
                    {Data.map((item) => (
                      <Service
                        key={item.id}
                        moreinfosrc={item.moreinfosrc}
                        serviceimg={item.serviceimg}
                        title={item.title}
                      />
                    ))}
                  </StyledProductServicesList>
                </StyledProductServices>
              </StyledProductServicesWrapper>
            </StyledProductContent>
          </StyledWrapperInner>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

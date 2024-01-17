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
  StyledProductButtonWrapper,
  StyledProductBtn,
  StyledProductPrivateBtn,
  StyledProductCorporateBtn,
  PrivateIcon,
  CorporateIcon,
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
            {/* <StyledProductCurve src="https://i.ibb.co/8PZppBR/product.jpg" alt="product-curve"/> */}

            <StyledProductContent>
              <StyledProductHeadingWrapper>
                <StyledProductHeading>Product & Solutions</StyledProductHeading>
              </StyledProductHeadingWrapper>

              <StyledProductContentText>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </StyledProductContentText>

              <StyledProductButtonWrapper>
                <StyledProductPrivateBtn>
                  <StyledProductBtn>
                    <PrivateIcon />
                    Private Customers
                  </StyledProductBtn>
                </StyledProductPrivateBtn>
                <StyledProductCorporateBtn>
                  <StyledProductBtn>
                    <CorporateIcon />
                    Corporate Customers
                  </StyledProductBtn>
                </StyledProductCorporateBtn>
              </StyledProductButtonWrapper>

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

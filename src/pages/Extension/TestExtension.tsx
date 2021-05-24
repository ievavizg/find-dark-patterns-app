import * as React from "react";
import { useLanguage } from "../../context";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import {
  Wrapper,
  InfoBoxWrapper,
  PictureWrapper,
  PriceWrapper,
  HeadingWrapper,
  InfoText,
  StyledWrapper,
} from "./TestExtension.styled";
import Product from "./product.png";

const TestExtension = (): React.ReactElement => {
  const {
    testExt: { heading, lastSubmit, price },
  } = useLanguage().strings;

  return (
    <React.Fragment>
      <Heading>{heading}</Heading>
      <Wrapper>
        <PictureWrapper>
          <img
            src={Product}
            style={{
              flex: 1,
              width: "20rem",
              height: "20rem",
            }}
          />
        </PictureWrapper>
        <StyledWrapper>
          <HeadingWrapper>The Greatest Wireless Computer Mouse</HeadingWrapper>
          <PriceWrapper>{price}: 34,2e</PriceWrapper>
          <InfoBoxWrapper>
            <InfoText>{lastSubmit}</InfoText>
          </InfoBoxWrapper>
        </StyledWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default TestExtension;

import * as React from "react";
import { useLanguage } from "../../context";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import {
  Wrapper,
  InfoBoxWrapper,
  PictureWrapper,
  PriceWrapper,
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
        <PriceWrapper>{price}: 34,2e</PriceWrapper>
        <InfoBoxWrapper>{lastSubmit}</InfoBoxWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default TestExtension;

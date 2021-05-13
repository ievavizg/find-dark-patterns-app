import * as React from "react";
import { useLanguage } from "../../context";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import { Wrapper } from "./TestExtension.styled";
import Timer from "./Timer";

const TestExtension = (): React.ReactElement => {
  const {
    extension: { heading },
  } = useLanguage().strings;

  return (
    <React.Fragment>
      <Heading>{"Test Extension"}</Heading>
      <Wrapper>
        <Timer initialMinute={1} initialSeconds={30} />
      </Wrapper>
    </React.Fragment>
  );
};

export default TestExtension;

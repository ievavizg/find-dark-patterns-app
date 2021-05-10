import * as React from "react";
import { useLanguage } from "../../context";
import AccordionElement from "./AccordionElement/AccordionElement";
import { Heading } from "./DarkPatterns.styled";

const DarkPatterns = (): React.ReactElement => {
  const {
    patterns: {
      heading,
      darkPatterns,
      purpose,
      term,
      termOrigin,
      website,
      typesBrignull,
    },
  } = useLanguage().strings;

  return (
    <React.Fragment>
      <Heading>{heading}</Heading>
      <div>
        {darkPatterns}
      </div>
      <div>
        {purpose}
      </div>
      <h3>{term}</h3>
      <div>
      {termOrigin}
        <a href={"https://www.darkpatterns.org/"}>{website}</a>
      </div>
      <h2>{typesBrignull}</h2>
      <AccordionElement />
    </React.Fragment>
  );
};

export default DarkPatterns;

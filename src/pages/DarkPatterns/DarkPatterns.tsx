import * as React from "react";
import MiniDrawer from "../../components/Drawer/MiniDrawer";
import AccordionElement from "./AccordionElement/AccordionElement";
import { Container, Heading } from "./DarkPatterns.styled";

const DarkPatterns = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Heading>About Dark Patterns</Heading>
      <div>
        Dark Patterns are tricks used in websites and apps that make you do
        things that you didn't mean to, like buying or signing up for something.
        The purpose of this site is to spread awareness and to shame companies
        that use them.
      </div>
      <h2>Types</h2>
      <AccordionElement />
    </React.Fragment>
  );
};

export default DarkPatterns;

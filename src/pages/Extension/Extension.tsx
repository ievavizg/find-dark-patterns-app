import * as React from "react";
import { useHistory } from "react-router";
import { useLanguage } from "../../context";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import { AnswerButton } from "../Quiz/Questionaire";
import { StyledButton } from "./TestExtension.styled";
import Timer from "./Timer";

const Extension = (): React.ReactElement => {
  const {
    extension: { heading },
  } = useLanguage().strings;

  const history = useHistory();

  const navigateTotesting = () => history.push("/test-extension");

  return (
    <React.Fragment>
      <Heading>{heading}</Heading>
      <div>
        Extension 'Find Dark Patterns' is used to detect and inform user about
        possible usage of dark patterns in a page. It also highlights Google
        Ads. Since our database currently is a bit small extension mainly
        detects dark patterns on lithuanian sites by analyzing text in a site.
        It also searches for timers.
      </div>
      {/* <button>Test Extension</button> */}
      <div>
        If You have our extension already installed in Google Chrome you can
        test it by clicking button bellow
      </div>
      <StyledButton onClick={navigateTotesting}>
        {"Test Extension"}
      </StyledButton>
      {/* <Timer initialMinute={1} initialSeconds={30}/> */}
    </React.Fragment>
  );
};

export default Extension;

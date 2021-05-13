import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import DarkPatterns from "../pages/DarkPatterns/DarkPatterns";
import Extension from "../pages/Extension/Extension";
import TestExtension from "../pages/Extension/TestExtension";
import Quiz from "../pages/Quiz/QuizPage";
import RegisterPattern from "../pages/RegisterPattern/RegisterPattern";

import PrivateRoute from "./PrivateRoute";

const App = (): React.ReactElement => {
  return (
    <div data-testid="router.wrapper">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={DarkPatterns} />
          <PrivateRoute exact path="/quiz" component={Quiz} />
          <PrivateRoute exact path="/register-pattern" component={RegisterPattern} />
          <PrivateRoute exact path="/about-extension" component={Extension} />
          <PrivateRoute exact path="/test-extension" component={TestExtension} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;

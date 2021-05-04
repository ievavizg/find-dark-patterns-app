import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DarkPatterns from "../pages/DarkPatterns/DarkPatterns";
import Quiz from "../pages/Quiz/QuizPage";

import PrivateRoute from "./PrivateRoute";

const App = (): React.ReactElement => {
  return (
    <div data-testid="router.wrapper">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={DarkPatterns} />
          <PrivateRoute exact path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;

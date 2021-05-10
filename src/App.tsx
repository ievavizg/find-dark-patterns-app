import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import { LangProvider } from "./context";
import strings from "./context/dictionary";

const App: React.FC = (): React.ReactElement => {
  return (
    <LangProvider locale="en" dictionary={strings}>
      <Router />
    </LangProvider>
  );
};

export default App;

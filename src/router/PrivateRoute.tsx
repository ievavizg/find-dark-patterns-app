import React from "react";
import { Route, RouteProps } from "react-router-dom";
import MiniDrawer from "../components/Drawer/MiniDrawer";
import { Background, ComponentWrapper } from "./PrivateRoute.styled";

const PrivateRoute = ({
  component: Component,
  ...rest
}: RouteProps): React.ReactElement | null => {
  if (Component) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Background>
            <MiniDrawer />
            <ComponentWrapper>
              <Component {...props} />
            </ComponentWrapper>
          </Background>
        )}
      />
    );
  } else {
    return null;
  }
};

export default PrivateRoute;

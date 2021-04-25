import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthanticated } from "..";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // is authanticacted from server helper
        isAuthanticated() ? (
          // if true
          <Component />
        ) : (
          // if false
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

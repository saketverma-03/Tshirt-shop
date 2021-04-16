import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthanticated } from "..";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // is authanticacted from server helper
        isAuthanticated() && isAuthanticated().user.role == 1 ? (
          // if true
          <Component />
        ) : (
          // if false
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// User pages
import { Home, Signin, Signup, UserDashBoard } from "./user";
// Admin Page
import Admin from "./admin";

// Protected Routes
import { AdminRoute, PrivateRoute } from "./auth/helper";

// Other stuff
// import { Base } from "./components";
import { headerContext } from "./context";

//Global css
import "./components/style.css";

const Routes = () => {
  const [headhide, setHeadHide] = React.useState(false);
  return (
    <headerContext.Provider value={{ headhide, setHeadHide }}>
      <BrowserRouter>
        <Base>
          <Switch>
            {/* Public Routes */}
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            {/* Signed in Users Routes */}
            <PrivateRoute
              path="/user/dashboard"
              exact
              component={UserDashBoard}
            />
            {/* DdminRoutes */}
            <AdminRoute path="/admin" exact component={Admin} />
          </Switch>
        </Base>
      </BrowserRouter>
    </headerContext.Provider>
  );
};

export default Routes;

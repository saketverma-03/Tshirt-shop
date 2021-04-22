import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// User pages
import { Home, Login, Signup } from "./user";
// Admin Page
import Admin from "./admin";

// Protected Routes
import { AdminRoute } from "./server";

// Other stuff
import { Base } from "./components";
import { headerContext } from "./context";

const Routes = () => {
  const [headhide, setHeadHide] = React.useState(false);
  return (
    <headerContext.Provider value={{ headhide, setHeadHide }}>
      <ToastContainer />
      <BrowserRouter>
        <Base>
          <Switch>
            {/* Public Routes */}
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            {/* Signed in Users Routes */}
            {/* <PrivateRoute
              path="/user/dashboard"
              exact
              component={UserDashBoard}
            /> */}
            {/* DdminRoutes */}
            <AdminRoute path="/admin" exact component={Admin} />
          </Switch>
        </Base>
      </BrowserRouter>
    </headerContext.Provider>
  );
};

export default Routes;

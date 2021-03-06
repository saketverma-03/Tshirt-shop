import React, { Suspense,lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// User pages
import { Home, Signup, Cart } from "./user";
// Admin Page
import Admin from "./admin";

// Protected Routes
import { AdminRoute, PrivateRoute } from "./server";

// Other stuff
import { Base } from "./components";
import { headerContext } from "./context";
const Login = lazy(() => import("./user/login"))

const Routes = () => {
  const [headhide, setHeadHide] = React.useState(false);
  return (
    <headerContext.Provider value={{ headhide, setHeadHide }}>
      <ToastContainer />
      <BrowserRouter>
        <Base>
        <Suspense fallback={<div>Loading....</div>} >
          <Switch>
            {/* Public Routes */}
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            {/* Signed in Users Routes */}
            <PrivateRoute path="/cart" exact component={Cart} />

            {/* DdminRoutes */}
            <AdminRoute path="/admin" exact component={Admin} />
          </Switch>
          </Suspense>
        </Base>
      </BrowserRouter>
    </headerContext.Provider>
  );
};

export default Routes;

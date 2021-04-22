import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//lOCAL IMPORTS
import { AdminRoute } from "../server";
import { headerContext } from "../context";
import Category from "./Category";
import Products from "./Products";
import ManageProducts from "./ManageProducts";

import { Base } from "./components";

const AdminDashBoard = (props) => {
  console.log("At admin")
  const { setHeadHide } = React.useContext(headerContext);
  setHeadHide(true);

  // TODO: Create a home page for admin
  const Home = () => <h3>At Admin ManePage</h3>;

  // ROUTES
  return (
    <Router>
      <Base>
        <Switch>
          <AdminRoute exact path="/admin" component={Home} />
          <AdminRoute exact path="/admin/category" component={Category} />
          <AdminRoute exact path="/admin/products" component={Products} />
          <AdminRoute
            exact
            path="/admin/manageProducts"
            component={ManageProducts}
          />
        </Switch>
      </Base>
    </Router>
  );
};

export default AdminDashBoard;

import React from "react";
import { headerContext } from "../context";

function Home(props) {
  const { setHeadHide } = React.useContext(headerContext);
  setHeadHide(false);
  return (
    <div>
      <h1> Home page</h1>
    </div>
  );
}

export default Home;

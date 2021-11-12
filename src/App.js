import React from "react";
// import { Layout, } from "antd";

import * as pages from "./pages";

const { Home } = pages;

const App = () => {
  return (
    <>
      {/* <div className="header">
                <Home />
            </div> */}
      <div className="main">
      {/* <Layout> */}
        <Home />
        {/* </Layout> */}
      </div>
      {/* <div className="footer">
                <Home />
            </div> */}
    </>
  );
};

export default App;

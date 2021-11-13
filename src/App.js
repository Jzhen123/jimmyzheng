import React from "react";

import * as pages from "./pages";

import './App.css'

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

import React from "react";

import * as pages from "./pages";

const { Home } = pages;

const App = () => {
  return (
    <>
      {/* <div className="header">
                <Home />
            </div> */}
      <div className="main">
        <Home />
      </div>
      {/* <div className="footer">
                <Home />
            </div> */}
    </>
  );
};

export default App;

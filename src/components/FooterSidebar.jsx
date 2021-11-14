import React from "react";
import { Layout } from "antd";

import "./FooterSidebar.css";

const { Sider } = Layout;

const FooterSiderbar = ({ children, position }) => {
  return (
    <Sider className="hero-sider" style={{ [position]: 0 }}>
      {children}
      <span className="line" />
    </Sider>
  );
};

export default FooterSiderbar;

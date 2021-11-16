import React from "react";
import { Layout } from "antd";

import "./FooterSider.css";

const { Sider } = Layout;

const FooterSider = ({ children, position }) => {
  return (
    <Sider className="hero-sider" style={{ [position]: 0 }}>
      {children}
      <span className="line" />
    </Sider>
  );
};

export default FooterSider;

import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import FooterSiderbar from "../components/FooterSidebar";
import ScrollArrow from "../components/ScrollArrow";
import "./Home.css";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <FooterSiderbar position="left">
        <div className="icons">
          <GithubOutlined className="sider-icon" />
          <InstagramOutlined className="sider-icon" />
          <LinkedinOutlined className="sider-icon" />
          <TwitterOutlined className="sider-icon" />
        </div>
      </FooterSiderbar>

      <Content>
        <Row align="middle" justify="center" style={{ height: "100vh" }}>
          <Col id="hero-text">
            <Row justify="center" className="mask">
              <Col className="hero-text-header montserrat white">
                Jimmy Zheng
              </Col>
            </Row>
            <Row justify="center" className="mask">
              <Col className="hero-text-subheader montserrat white">
                Software Developer
              </Col>
            </Row>
          </Col>
        </Row>

        <ScrollArrow />
      </Content>

      <FooterSiderbar position="right">
        <div className="sider-text montserrat">jimmy@jimmyzheng.com</div>
      </FooterSiderbar>
    </Layout>
  );
};

export default Home;
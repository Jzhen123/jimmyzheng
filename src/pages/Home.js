import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { FooterSider, ProjectShowcase, ScrollArrow } from "../components";

import "./Home.css";
import wePlan from '../resources/images/wePlan.png'

const { Content } = Layout;

const Home = () => {
  return (
    <div className="scroller">
      <Layout id="home" className="scrollee">
        <FooterSider position="left">
          <div className="icons">
            <a href="https://github.com/Jzhen123" target="_blank" rel="noreferrer"><GithubOutlined className="sider-icon" /></a>
            <a href="https://www.instagram.com/_jimmmmmy_/" target="_blank" rel="noreferrer"><InstagramOutlined className="sider-icon" /></a>
            <a href="https://www.linkedin.com/in/thejimmyzheng/" target="_blank" rel="noreferrer"><LinkedinOutlined className="sider-icon" /></a>
            <a href="https://twitter.com/Zheng120" target="_blank" rel="noreferrer"><TwitterOutlined className="sider-icon" /></a>
          </div>
        </FooterSider>

        <Content>
          <Row align="middle" justify="center" style={{ height: "100vh", position: 'relative' }}>
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
              <ScrollArrow />
          </Row>
        </Content>

        <FooterSider position="right">
          <a href="mailto:jimmy@jimmyzheng.com" target="_blank" rel="noreferrer" className="sider-text montserrat">jimmy@jimmyzheng.com</a>
        </FooterSider>
      </Layout>

      <Layout className="scrollee project-showcase-background">
      <ProjectShowcase image={wePlan}/>
      </Layout>
    </div>
  );
};

export default Home;

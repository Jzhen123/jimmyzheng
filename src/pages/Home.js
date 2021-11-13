import React from "react";
import { Row, Col } from "antd";

import ScrollArrow from "../components/ScrollArrow";
import "./Home.css";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
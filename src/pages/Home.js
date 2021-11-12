import React from "react";
import { Row, Col } from "antd";

import ScrollArrow from "../components/ScrollArrow";
import "./Home.css";

export default () => {
  return (
    <>
      <Row align="middle" justify="center" style={{ height: "100vh" }}>
        <Col id="text">
          <Row justify="center" className="nameAnimation mask">
            <Col id="name" className="white montserrat">
              Jimmy Zheng
            </Col>
          </Row>
          <Row justify="center" className="subNameAnimation mask">
            <Col id="subName" className="white montserrat">
              Software Developer
            </Col>
          </Row>
        </Col>
      </Row>

      <ScrollArrow />
    </>
  );
};

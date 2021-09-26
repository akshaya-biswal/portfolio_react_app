import React from "react";
import { Layout } from "antd";
import { Col, Menu, Row } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header>
        <Row style={{ height: "100%", marginTop: "1%" }}>
          <Col xs={1} sm={1} md={2} lg={2} xl={2} />
          <Col xs={22} sm={22} md={20} lg={20} xl={20}>
            <a href="/">
              <Img src="/images/logo.png" alt="logo" />
            </a>
            <Menu
              mode="horizontal"
              theme="light"
              style={{
                float: "right",
                width: "60%",
                textAlign: "right",
                backgroundColor: "#1f1f1f",
                border: "none",
              }}
              className="nav"
            >
              <Menu.Item className="link" key="home" style={{}}>
                <a style={{ color: "white" }} href="#aboutme">
                  About
                </a>
              </Menu.Item>
              <Menu.Item
                // ref={techRef}
                className="link"
                key="techiknow"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  // onMouseOver={handleHover}
                  href="#techiknow"
                >
                  Tech
                </a>
              </Menu.Item>
              <Menu.Item
                // ref={expRef}
                className="link"
                key="experience"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  // onMouseOver={handleHover}
                  href="#experience"
                >
                  Experience
                </a>
              </Menu.Item>
              <Menu.Item
                // ref={proRef}
                className="link"
                key="projects"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  // onMouseOver={handleHover}
                  href="#projects"
                >
                  Projects
                </a>
              </Menu.Item>
              <Menu.Item
                // ref={conRef}
                className="link"
                key="contact"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  // onMouseOver={handleHover}
                  href="#contact"
                >
                  Contact Me
                </a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={1} sm={1} md={2} lg={2} xl={2} />
        </Row>
      </Header>
    </Layout>
  );
};

const Img = styled.img`
  width: 100%;
  max-width: 100px;
`;

export default Navbar;

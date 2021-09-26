import React from "react";
import { Layout } from "antd";
import { Col, Menu, Row } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Container>
      <Layout>
        <Header>
          <Row style={{ height: "100%", marginTop: "1%" }}>
            <Col xs={1} sm={1} md={2} lg={2} xl={2} />
            <Col xs={22} sm={22} md={20} lg={20} xl={20}>
              <a href="/">
                <Img src="/images/logo.svg" alt="logo" />
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
    </Container>
  );
};

const Img = styled.img`
  width: auto;
  max-width: 100px;
  height: 60px;
`;

const Container = styled.div`
  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: white;
    }
  }
  #logo path:nth-child(1) {
    stroke-dasharray: 549.0669555664062;
    stroke-dashoffset: 549.0669555664062;
    animation: line-anim 2s ease forwards;
  }
  #logo {
    animation: fill 0.4s ease forwards 1.2s;
  }
  .link {
    font-size: 16px;
  }
  @media screen and (min-width: 3840px) {
    .link {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 1286px) {
    .link {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 502px) {
    .nav {
      margin-left: 50%;
    }
  }
  @media screen and (max-width: 492px) {
    .nav {
      margin-top: -70px;
    }
  }

  .ant-layout-header {
    background: rgb(31, 31, 31);
  }
`;

export default Navbar;

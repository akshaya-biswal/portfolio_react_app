import { Row, Col } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramOutlined,
  MailFilled,
} from "@ant-design/icons";
import Typed from "react-typed";
// import "react-typed/dist/animatedCursor.css";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={12}
          xl={12}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1 className="contact-header">
            <Typed
              strings={[
                "This could be the start of something great! ^666Let's get in touch. . .",
              ]}
              typeSpeed={40}
            />
          </h1>
        </Col>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={12} xl={12} lg={18} xs={20} md={18} sm={18}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "100px",
            }}
            className="links-wrapper"
          >
            <div
              data-aos="fade"
              data-aos-delay="250"
              data-aos-once
              className="contact-container linkedin-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/akshaya-kumar-biswal/"
              >
                <LinkedinFilled
                  className="linkedin-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="750"
              data-aos-once
              className="contact-container gmail-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:akshaya.join@gmail.com"
              >
                <MailFilled
                  className="gmail-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="500"
              data-aos-once
              className="contact-container github-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/akshaya-biswal"
              >
                <GithubFilled
                  className="github-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            {/* <div
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-once
              className="contact-container instagram-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href=""
              >
                <InstagramOutlined
                  className="instagram-image"
                  style={{ color: "white" }}
                />
              </a>
            </div> */}
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={2} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .linkedin-image {
    font-size: 60px;
  }
  .github-image {
    font-size: 60px;
  }
  .instagram-image {
    font-size: 70px;
  }
  .gmail-image {
    font-size: 65px;
    margin-top: 5px;
  }
  .contact-container {
    width: 25%;
    float: left;
  }
  .contact-header {
    color: rgb(168, 164, 164);
  }
  @media screen and (min-width: 3840px) {
    .contact-header {
      font-size: 45px;
      margin-left: 5%;
    }
    .links-wrapper {
      margin-left: -10%;
    }
    .contact-container {
      width: 15%;
      float: left;
    }
  }
  @media screen and (max-width: 1630px) {
    .linkedin-image {
      font-size: 50px;
    }
    .github-image {
      font-size: 50px;
    }
    .instagram-image {
      font-size: 65px;
    }
    .gmail-image {
      font-size: 55px;
      margin-top: 5px;
    }
    .contact-container {
      width: 25%;
      float: left;
    }
  }
  @media screen and (max-width: 1105px) {
    .linkedin-image {
      font-size: 40px;
    }
    .github-image {
      font-size: 40px;
    }
    .instagram-image {
      font-size: 55px;
    }
    .gmail-image {
      font-size: 40px;
      margin-top: -3px;
    }
    .contact-container {
      width: 25%;
      float: left;
    }
  }
  @media screen and (min-width: 1050px) and (max-width: 1178px) {
    .contact-header {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 993px) {
    .contact-header {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 970px) {
    .linkedin-image {
      font-size: 40px;
    }
    .github-image {
      font-size: 40px;
    }
    .instagram-image {
      font-size: 55px;
    }
    .gmail-image {
      font-size: 40px;
      margin-top: 5px;
    }
    .contact-container {
      width: 25%;
      float: left;
    }
  }
  @media screen and (max-width: 769px) {
    .linkedin-image {
      font-size: 40px;
    }
    .github-image {
      font-size: 40px;
    }
    .instagram-image {
      font-size: 55px;
    }
    .gmail-image {
      font-size: 40px;
    }
    .contact-container {
      width: 25%;
      float: left;
    }
  }
  @media screen and (max-width: 609px) {
    .contact-header {
      font-size: 20px;
    }
    .instagram-image {
      font-size: 45px;
    }
  }
  @media screen and (max-width: 483px) {
    .gmail-image {
      font-size: 40px;
      margin-top: 0px;
    }
    .contact-container {
      width: 25%;
      float: left;
    }
  }
`;

export default Contact;

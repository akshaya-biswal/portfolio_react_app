import { Row, Col } from "antd";
import styled from "styled-components";

const Experience = () => {
  return (
    <Container id="experience">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="experience-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ borderBottom: "2px solid rgb(168, 164, 164)" }}
          >
            <b>Experience</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={5}
          xl={5}
          lg={18}
          xs={10}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
            className="prepiit-heading"
          >
            <b>
              <a
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
                href="https://opensenselabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                OSL
              </a>
            </b>
          </h1>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={12}
          xl={12}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="role-heading"
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
          >
            <b>React Developer</b>
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ color: "rgb(168, 164, 164)" }}
          >
            <li className="list">
              Developed the frontend of the Techtud Educational Platform
            </li>
            <li className="list">
              Developed the frontend of VisitKC and StemFuse
            </li>
            <li className="list">API integration</li>
            <li className="list">Used Redux Toolkit for state management</li>
            <li>Used antd framework</li>
          </ul>
        </Col>
        <Col xxl={7} xl={7} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .list {
    font-size: 16px;
  }
  .experience-heading {
    color: rgb(168, 164, 164);
  }
  .role-heading {
    color: rgb(168, 164, 164);
  }
  @media screen and (min-width: 3840px) {
    .experience-heading {
      font-size: 40px;
    }
    .prepiit-heading,
    .fossee-heading,
    .imocha-heading {
      font-size: 34px;
    }
    .role-heading {
      font-size: 30px;
    }
    .list {
      font-size: 26px;
    }
  }
  @media screen and (min-width: 1050px) and (max-width: 1178px) {
    .experience-heading {
      font-size: 25px;
    }
    .prepiit-heading,
    .fossee-heading,
    .imocha-heading {
      font-size: 20px;
    }
    .role-heading {
      font-size: 15px;
    }
    .list {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 702px) {
    .list {
      font-size: 15px;
    }
    .role-heading {
      font-size: 27px;
    }
  }
  @media screen and (max-width: 474px) {
    .list {
      font-size: 14px;
    }
    .role-heading {
      font-size: 23px;
    }
  }
`;

export default Experience;

import { Row, Col } from "antd";
import styled from "styled-components";

const Tech = () => {
  return (
    <Container id="techiknow">
      <Row style={{ marginTop: "35vh" }}>
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
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="techiknow-heading"
          >
            <b>Tech I Know</b>
          </h1>
          <br />
          <div data-aos="fade-up" data-aos-delay="100" data-aos-once>
            <p className="techiknow-first">
              I love learning new things, the world of Web Development is
              constantly changing and I'm here for every bit of that journey.
              Applying new concepts and seeing them come to life is immensely
              satisfying and gives me a sense of massive pride
            </p>
            <p className="techiknow-second">
              In the process of learning new things, I have picked up quite a
              wide variety of skills.
            </p>
            <p className="techiknow-third">My best skills include:</p>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={9}
          xl={9}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left", marginTop: "1%" }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="frameworks-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="frameworks-heading"
            >
              <b>Frontend</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="frameworks">
              ReactJS, Redux, Antd, Bootstrap, Zurb Foundation,
              <br />
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="devops-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="devops-heading"
            >
              <b>Backend</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="devops">
              ExpressJS, NodeJS
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="database-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="database-heading"
            >
              <b>Databases</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="database">
              MongoDB
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Languages</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              JavaScript
            </p>
          </div>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .techiknow-heading {
    border-bottom: 2px solid rgb(168, 164, 164);
    color: rgba(255, 255, 255, 0.85);
  }
  .frameworks,
  .devops,
  .database,
  .languages {
    font-size: 16px;
  }
  .techiknow-first,
  .techiknow-second,
  .techiknow-third {
    color: rgb(168, 164, 164);
    font-size: 16px;
  }
  .frameworks-heading,
  .devops-heading,
  .database-heading,
  .languages-heading {
    color: rgba(255, 255, 255, 0.85);
  }
  @media screen and (min-width: 3840px) {
    .techiknow-heading {
      font-size: 40px;
    }
    .techiknow-first,
    .techiknow-second,
    .techiknow-third,
    .frameworks,
    .devops,
    .database,
    .languages {
      font-size: 26px;
    }
    .frameworks-heading,
    .devops-heading,
    .database-heading,
    .languages-heading {
      font-size: 34px;
    }
  }
  @media screen and (min-width: 1178px) and (max-width: 1330px) {
    .techiknow-first,
    .techiknow-second,
    .techiknow-third {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 1050px) and (max-width: 1178px) {
    .techiknow-first,
    .techiknow-second,
    .techiknow-third {
      font-size: 11px;
    }
    .frameworks-heading,
    .devops-heading,
    .database-heading,
    .languages-heading {
      font-size: 17px;
    }
    .frameworks,
    .devops,
    .database,
    .languages {
      font-size: 12px;
    }
    .techiknow-heading {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 702px) {
    .techiknow-first,
    .techiknow-second,
    .techiknow-third,
    .frameworks,
    .devops,
    .database,
    .languages {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 474px) {
    .techiknow-first,
    .techiknow-second,
    .techiknow-third {
      font-size: 14px;
      margin-top: -10px;
    }
  }
`;

export default Tech;

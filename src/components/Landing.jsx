import { Row, Col } from "antd";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container id="landing">
      <Row style={{ marginTop: "17vh" }}>
        <Col xxl={5} xl={5} lg={4} xs={2} md={3} sm={3} />
        <Col
          xxl={14}
          xl={14}
          lg={17}
          xs={20}
          md={18}
          sm={18}
          style={{
            textAlign: "left",
          }}
        >
          <p
            data-aos="fade"
            data-aos-delay="200"
            data-aos-once
            className="welcome-hi"
          >
            Hi, my name is
          </p>
          <p
            data-aos="fade"
            data-aos-delay="600"
            data-aos-once
            className="name"
          >
            <b>Akshaya Kumar Biswal.</b>
          </p>
          <p
            data-aos="fade"
            data-aos-delay="1000"
            data-aos-once
            className="short-desc"
          >
            <b>I build things for the Web.</b>
          </p>
          <p
            data-aos="fade"
            data-aos-delay="1400"
            data-aos-once
            className="long-desc"
            style={{ color: "rgb(168, 164, 164)" }}
          >
            I am a MERN Stack developer in love with javascript.
            <br />
            I love building stuff and solving problems,
            <br /> and I'm currently working in OSL
            <br />
            New Delhi, India.
          </p>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .welcome-hi {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.85);
  }
  .name {
    font-size: 70px;
    color: rgba(255, 255, 255, 0.85);
  }
  .short-desc {
    font-size: 60px;
    margin-top: -75px;
    color: rgba(255, 255, 255, 0.85);
  }
  .long-desc {
    font-size: 16px;
    margin-top: -50px;
  }
  @media screen and (min-width: 3840px) {
    .welcome-hi {
      font-size: 30px;
    }
    .name {
      font-size: 80px;
    }
    .short-desc {
      font-size: 70px;
      margin-top: -75px;
    }
    .long-desc {
      font-size: 26px;
      margin-top: -50px;
    }
  }
  @media screen and (max-width: 1140px) {
    .welcome-hi {
      font-size: 16px;
    }
    .name {
      font-size: 60px;
    }
    .short-desc {
      font-size: 50px;
      margin-top: -75px;
    }
    .long-desc {
      font-size: 16px;
      margin-top: -50px;
    }
  }
  @media screen and (min-width: 1050px) and (max-width: 1178px) {
    .welcome-hi {
      font-size: 13px;
    }
    .name {
      font-size: 60px;
    }
    .short-desc {
      font-size: 50px;
      margin-top: -75px;
    }
    .long-desc {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 878px) {
    .welcome-hi {
      font-size: 16px;
    }
    .name {
      font-size: 50px;
    }
    .short-desc {
      font-size: 40px;
      margin-top: -50px;
    }
    .long-desc {
      font-size: 16px;
      margin-top: -30px;
    }
  }
  @media screen and (max-width: 702px) {
    .welcome-hi {
      font-size: 16px;
    }
    .name {
      font-size: 40px;
    }
    .short-desc {
      font-size: 30px;
      margin-top: -40px;
    }
    .long-desc {
      font-size: 15px;
      margin-top: -20px;
    }
  }
  @media screen and (max-width: 474px) {
    .welcome-hi {
      font-size: 16px;
    }
    .name {
      font-size: 40px;
    }
    .short-desc {
      font-size: 25px;
      margin-top: -30px;
    }
    .long-desc {
      font-size: 13px;
      margin-top: -10px;
    }
  }
`;

export default Landing;

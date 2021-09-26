import { Row, Col } from "antd";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container id="aboutme">
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
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-heading"
          >
            <b>About Me</b>
          </h1>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
            I am a Full Stack Developer, I really enjoy building new things and
            overcoming new challenges. I'm always eager to learn new concepts
            and apply them in my projects Currently, I'm building a React based
            Educational Platform Techtud
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-second"
          >
            I am a dedicated team player, and I get along well with any team
            environment.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-third"
          >
            In my free time, I love to explore new places
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-fourth"
          >
            if not this, you'll find me hangout with friends
          </p>
        </Col>
        <Col xxl={1} xl={1} lg={7} xs={2} />
        <Col
          data-aos="fade"
          data-aos-delay="500"
          data-aos-once
          xxl={9}
          xl={9}
          lg={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <section className="main">
            <div className="container">
              <div className="img-container">
                <img
                  className="image"
                  src="/images/profile.jpg"
                  alt="profile"
                />
              </div>
            </div>
          </section>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .about-first,
  .about-second,
  .about-third,
  .about-fourth {
    color: rgb(168, 164, 164);
    font-size: 16px;
  }
  .image {
    width: 50%;
    height: 50%;
  }
  .about-heading {
    border-bottom: 2px solid rgb(168, 164, 164);
    color: rgba(255, 255, 255, 0.85);
  }
  @media screen and (min-width: 3840px) {
    .about-heading {
      font-size: 40px;
    }
    .about-first,
    .about-second,
    .about-third,
    .about-fourth {
      font-size: 26px;
    }
    .image {
      width: 50%;
      height: 50%;
    }
  }
  @media screen and (max-width: 1505px) {
    .image {
      width: 75%;
      height: 75%;
    }
  }
  @media screen and (min-width: 1178px) and (max-width: 1330px) {
    .about-first,
    .about-second,
    .about-third,
    .about-fourth {
      font-size: 15px;
    }
    .image {
      width: 70%;
      height: 70%;
    }
  }
  @media screen and (min-width: 1050px) and (max-width: 1178px) {
    .about-first,
    .about-second,
    .about-third,
    .about-fourth {
      font-size: 11px;
    }
    .about-heading {
      font-size: 25px;
    }
    .image {
      width: 60%;
      height: 60%;
    }
  }
  @media screen and (max-width: 993px) {
    .image {
      width: 25%;
      height: 25%;
    }
  }
  @media screen and (max-width: 804px) {
    .image {
      width: 40%;
      height: 40%;
    }
  }
  @media screen and (max-width: 532px) {
    .image {
      width: 60%;
      height: 60%;
    }
  }
  @media screen and (max-width: 702px) {
    .about-first,
    .about-second,
    .about-third,
    .about-fourth {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 474px) {
    .about-first,
    .about-second,
    .about-third,
    .about-fourth {
      font-size: 14px;
      margin-top: -10px;
    }
  }
`;

export default AboutMe;

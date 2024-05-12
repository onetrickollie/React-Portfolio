import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/BossGame.png";
import projImg2 from "../assets/img/SongSphere.png"; // Example image for Tab 2
import projImg3 from "../assets/img/sonic.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Click on the image to access the project!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <a href = "https://play.unity.com/mg/other/webgl-builds-397323" target="_blank" rel="noopener noreferrer">
                        <img src={projImg1} alt="Project Image 1" className="tab-two-image" />
                      </a>
                        <p>A pixel 2D game made in Unity</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <a href ="https://github.com/onetrickollie/SongSphere?tab=readme-ov-file" target ="_blank" rel = "noopener noreferrer">
                      <img src={projImg2} alt="Project Image 2" className="tab-two-image" />
                      </a>
                        <p>A spotify cloned with added features</p>
                          </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <img src={projImg3} alt="Project Image 3" className="tab-two-image" />
                      <p>Coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

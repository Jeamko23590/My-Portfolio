import React from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import aboutImage1 from '../assets/images/about1.jpg';
import aboutImage2 from '../assets/images/about2.jpg';
import aboutImage3 from '../assets/images/about3.jpg';

function About() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            Hello! My name is Jearemy Niko Nositera, and my true passion lies in the dynamic world of web development. From crafting elegant user interfaces to building robust and functional web applications, I find immense satisfaction in bringing digital ideas to life.
          </Card.Text>
          <Card.Text>
            As a 3rd-year BSIT student, I've been focusing on front-end frameworks like React and Bootstrap, and exploring back-end concepts. I'm particularly interested in creating interactive user experiences and learning new JavaScript libraries.
          </Card.Text>
          <Card.Text>
            Outside of coding, I enjoy playing the guitar, exploring new technologies, and playing strategy games. These activities help me recharge and often spark new perspectives that I can apply to my development work. I'm always eager to learn and collaborate on exciting projects.
          </Card.Text>
          <Row className="mt-3">
            <Col md={4} className="mb-3 text-center">
              <div className="about-image-container">
                <Image src={aboutImage1} alt="Playing guitar on stage" fluid rounded />
              </div>
              <p className="text-muted mt-1 small">Playing guitar is one of my favorite hobbies.</p>
            </Col>
            <Col md={4} className="mb-3 text-center">
              <div className="about-image-container">
                <Image src={aboutImage2} alt="Best Fit" fluid rounded />
              </div>
              <p className="text-muted mt-1 small">Confidence is Key!</p>
            </Col>
            <Col md={4} className="mb-3 text-center">
              <div className="about-image-container">
                <Image src={aboutImage3} alt="The Director" fluid rounded />
              </div>
              <p className="text-muted mt-1 small">Director on the house.</p>
            </Col>
          </Row>
          <Card.Text>
            I am continuously seeking opportunities to expand my skill set and contribute meaningfully to the web development community. I am excited about applying my knowledge and passion to future projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
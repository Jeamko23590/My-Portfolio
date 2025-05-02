import React from 'react';
import { Container, Card, ListGroup, Image, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImage from '../assets/images/contact.jpg';

function Contact() {
  return (
    <Container className="mt-4">
      <h2>Contact Me</h2>
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              <Image src={contactImage} alt="Contact Me" fluid rounded />
            </Col>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FaEnvelope className="me-2" />
                  <strong>Email:</strong> <a href="mailto:nositerajearemyniko21@gmail.com">nositerajearemyniko21@gmail.com</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaGithub className="me-2" />
                  <strong>GitHub:</strong> <a href="https://github.com/Jeamko23590" target="_blank" rel="noopener noreferrer">github.com/Jeamko23590</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaLinkedin className="me-2" />
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mrnositera/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mrnositera</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
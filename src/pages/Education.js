import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Education() {
  const educationList = [
    {
      institution: 'University of Cabuyao',
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      years: 'Currently Enrolled (3rd Year)',
    },
    // You can add previous educational experiences here, like high school
    // {
    //   institution: '[Name of Your High School]',
    //   degree: '[Your High School Diploma]',
    //   years: '[Start Year] - [End Year]',
    // },
  ];

  return (
    <Container className="mt-4">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{edu.institution}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Degree/Course:</strong> {edu.degree}</ListGroup.Item>
              <ListGroup.Item><strong>Status:</strong> {edu.years}</ListGroup.Item>
              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <ListGroup.Item>
                  <strong>Relevant Courses:</strong> {edu.relevantCourses.join(', ')}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Education;
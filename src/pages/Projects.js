import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Projects() {
  const projectList = [
    {
      title: 'Personal Portfolio Website (This One!)',
      description: 'A personal website built with React and Bootstrap to showcase my skills, education, and projects.',
      technologies: ['React', 'React Router', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/your-github/your-portfolio-repo' // Replace with your actual GitHub repository link
    },
    {
      title: 'Simple Task Manager',
      description: '[A brief description of Project 2 - e.g., A basic web application for managing daily tasks with features like adding, deleting, and marking tasks as complete.]',
      technologies: ['React', 'React Router', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Laravel'], // Add relevant technologies
      link: 'https://github.com/natayaeden/ADET-Midterm-CS.git' // Replace with your actual GitHub repository link
    },
    // Add more projects as you complete them! Aim for at least two.
  ];

  return (
    <Container className="mt-4">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Technologies: {project.technologies.join(', ')}
            </Card.Subtitle>
            {project.link && (
              <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;
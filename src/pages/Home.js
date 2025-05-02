import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import profileImage from '../assets/images/profile.jpg'; // Import the image

function Home() {
  return (
    <Container className="mt-4 text-center"> {/* Center the content */}
      <div className="profile-image-container"> {/* Add a container for better control */}
        <Image src={profileImage} alt="Your Profile" roundedCircle />
      </div>
      <Card className="bg-light p-5 mt-3"> {/* Add some top margin to the card */}
        <Card.Body>
          <Card.Title as="h1">Welcome! I'm Jearemy Niko Nositera</Card.Title>
          <Card.Text className="lead">
            A passionate 3rd-year BSIT student with a love for crafting web experiences.
          </Card.Text>
          <Card.Text>
            Explore my portfolio to learn more about my skills, projects, and journey in the world of web development.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
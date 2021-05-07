import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

import ProjectCard from "./ProjectCard.js";

class Projects extends React.Component {
  render() {
    return (
      <>      
		<section className="section bg-secondary">
            <Container className="projectCardContainer">
                <ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
				<ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
				<ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
				<ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
				<ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
				<ProjectCard 
					name="tempProjectName"
					url="www.google.com"
					desc="Description"
					color="#34eb89"
                />
            </Container>
          </section>
      </>
    );
  }
}

export default Projects;

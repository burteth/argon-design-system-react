
import React from "react";

import { Button, Card, Container, Row, Col } from "reactstrap";

class ProjectCard extends React.Component {
  render() {
    return (
        <div className=" projectCard col-xs-1 col-sm-6 col-lg-5 col-xl-4 px-3">

			<div className="projectImageContainer card">

				<div className="projectDesc">
					{this.props.desc}
				</div>
				
				<img 
					className="projectImage"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rTt1TwAP0lvMuOT4JoET3Vt9ZmNN1_R90bfJMt0JP3565OzwEJDE2EmpIDEGSWNyoDo&usqp=CAU"
					alt=""
				/>				
				
			</div>

			<div className="projectName p-1">
				{this.props.name}
			</div>

        </div>
    );
  }
}

export default ProjectCard;

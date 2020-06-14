import React from "react"
import Section from "../"
import ProjectCard from "./ProjectCard"
import Row from 'react-bootstrap/Row'
const projects = require('./projects.json');

const Projects = () => {
    let cards = [];
    let count = 0;
    projects && projects.forEach(project => {
        cards.push(<ProjectCard {...project} key={count} keyC={count++} />);
    });
    return (
        <Section sectionTitle="Projects">
            <Row className="cardList">
                {cards}
            </Row>
            
            <h4>Made with:</h4>
        </Section>
    )
    
}


export default Projects;

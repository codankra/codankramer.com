import React from "react"
import Section from "../"
import ProjectCard from "./ProjectCard"
import Row from 'react-bootstrap/Row'
const projects = require('./projects.json');

const Projects = () => {
    let cards = [];
    let count = -1;
    projects && projects.forEach(project => {
        if(count === -1) {
            count++;
            cards.push(<ProjectCard {...project} key={count} keyC={count++} />);
        }
        else {
            cards.push(<div><hr /><ProjectCard {...project} key={count} keyC={count++} /></div>);
        }

        
    });
    return (
        <Section sectionTitle="Projects">
            <Row className="cardList">
                {cards}
            </Row>
            
            <h4 className="row-push">made with...</h4>
        </Section>
    )
    
}


export default Projects;

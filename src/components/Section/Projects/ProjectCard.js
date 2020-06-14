import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './ProjectCard.module.css'

const ProjectCard = ({web, src, name, techs, img, desc, keyC}) => {
    techs && techs.map(tech => (<li>{tech}</li>))
    let col1 = ( 
                <Col xs={12} md={6}>
                    <img src={img} alt="Project Preview" className={styles.projImg}/>
                </Col> );
    let col2 = (
                <Col xs={12} md={6}>
                    <h2 className={styles.name}>{name}</h2>
                    <p>{desc}</p>
                    <p className={styles.techsList}>{techs}</p>
                    { (web || src) &&
                    <div className={styles.projLinks}>
                        {web && <a href={web}>See it Live</a>}
                        {src && <a href={src}>View Source on Github</a>}
                    </div> }
                </Col>);
    if (keyC % 2 === 0) {
        return (
            <Col md={12}>
                <Row>
                   {col1}
                   {col2}
                </Row>
            </Col>
        );
    } else {
        return (
            <Col md={12}>
                <Row>
                    {col2}
                    {col1}
                </Row>
            </Col>
        );

    }

}
    
export default ProjectCard;

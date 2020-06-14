import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './ProjectCard.module.css'

const ProjectCard = ({web, src, name, techs, img, desc, keyC}) => {
    techs && techs.map(tech => (<li>{tech}</li>))
    console.log(keyC)
    if (keyC % 2 === 0) {
        return (
            <Col md={12}>
                <hr />
                <Row>
                    <Col xs={12} md={6}>
                        <img src={img} className={styles.projImg}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className={styles.name}>{name}</h2>
                        <p>{desc}</p>
                        <p className={styles.techsList}>{techs}</p>
                        { (web || src) &&
                        <div className={styles.projLinks}>
                            {web && <a href={web}>See it Live</a>}
                            {src && <a href={src}>View Source on Github</a>}
                        </div> }
                    </Col>
                </Row>
            </Col>
        );
    } else {
        return (
            <Col md={12}>
                <hr />
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className={styles.name}>{name}</h2>
                        <p>{desc}</p>
                        <p className={styles.techsList}>{techs}</p>
                        { (web || src) &&
                        <div className={styles.projLinks}>
                            {web && <a href={web}>See it Live</a>}
                            {src && <a href={src}>View Source on Github</a>}
                        </div> }
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={img} className={styles.projImg}/>
                    </Col>
                </Row>
            </Col>
        );

    }

}
    
export default ProjectCard;

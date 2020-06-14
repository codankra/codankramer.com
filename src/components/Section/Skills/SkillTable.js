import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from "./SkillTable.module.css"
import Table from "react-bootstrap/Table"
import {FaBabyCarriage, FaChalkboardTeacher} from "react-icons/fa"
import {BsGearFill} from "react-icons/bs"
import {MdWork} from "react-icons/md"

const SkillTable = (props) => {
    const skillStyle={
        "verticalAlign": "middle",
        "marginBottom": "-10px"
    }
    return (
        <Row className="row-space">
            <Col md={12}>
            <h3 className="row-space">{props.title}</h3>
            <Table hover size="sm">
                <thead>
                    <tr>
                        <th scope="col" className={`text-center ${styles.theader} vert-center`} style={skillStyle}><h4 style={skillStyle}>Skills</h4></th>
                        <th scope="col"  className={`d-none d-md-table-cell text-center border-left ${styles.theader}`} ><FaBabyCarriage /><br />Beginner</th>
                        <th scope="col"  aria-label="Beginner" className={`d-md-none text-center border-left ${styles.theader}`}><FaBabyCarriage /></th>
                        <th scope="col"  className={`d-none d-md-table-cell text-center border-left ${styles.thead2} ${styles.theader}`}><BsGearFill /><br />Elementary</th>
                        <th scope="col" aria-label="Elementary" className={`d-md-none text-center border-left ${styles.thead2} ${styles.theader}`}><BsGearFill /></th>
                        <th scope="col"  className={`d-none d-md-table-cell text-center border-left ${styles.thead3} ${styles.theader}`}><MdWork /><br />Proficient</th>
                        <th scope="col" aria-label="Proficient" className={`d-md-none text-center border-left ${styles.thead3} ${styles.theader}`}><MdWork /></th>
                        <th scope="col"  className={`d-none d-md-table-cell text-center border-left ${styles.thead4} ${styles.theader}`}><FaChalkboardTeacher /><br />Advanced</th>
                        <th scope="col" aria-label="Advanced" className={`d-md-none text-center border-left ${styles.thead4} ${styles.theader}`}><FaChalkboardTeacher /></th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </Table>
            </Col>
        </Row>
    )
}
export default SkillTable;
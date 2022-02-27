import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import * as styles from "./SkillTable.module.css"
import Table from "react-bootstrap/Table"
import { FaBabyCarriage, FaChalkboardTeacher } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"
import { MdWork } from "react-icons/md"

const SkillTable = props => {
  const skillStyle = {
    verticalAlign: "middle",
    marginBottom: "-10px",
  }
  const theaderStyle = {
    width: "18%",
    backgroundColor: "#0000001a",
  }
  return (
    <Row className="row-space">
      <Col md={12}>
        <h3 className="row-space">{props.title}</h3>
        <Table hover size="sm">
          <thead>
            <tr>
              <th
                scope="col"
                className={`text-center vert-center`}
                style={theaderStyle}
              >
                <h4 style={skillStyle}>Skills</h4>
              </th>
              <th
                scope="col"
                className={`d-none d-md-table-cell text-center border-left`}
                style={theaderStyle}
              >
                <FaBabyCarriage />
                <br />
                Beginner
              </th>
              <th
                scope="col"
                aria-label="Beginner"
                className={`d-md-none text-center border-left`}
                style={theaderStyle}
              >
                <FaBabyCarriage />
              </th>
              <th
                scope="col"
                className={`d-none d-md-table-cell text-center border-left`}
                style={theaderStyle}
              >
                <BsGearFill />
                <br />
                Elementary
              </th>
              <th
                scope="col"
                aria-label="Elementary"
                className={`d-md-none text-center border-left`}
                style={theaderStyle}
              >
                <BsGearFill />
              </th>
              <th
                scope="col"
                className={`d-none d-md-table-cell text-center border-left`}
                style={theaderStyle}
              >
                <MdWork />
                <br />
                Proficient
              </th>
              <th
                scope="col"
                aria-label="Proficient"
                className={`d-md-none text-center border-left`}
                style={theaderStyle}
              >
                <MdWork />
              </th>
              <th
                scope="col"
                className={`d-none d-md-table-cell text-center border-left `}
                style={theaderStyle}
              >
                <FaChalkboardTeacher />
                <br />
                Advanced
              </th>
              <th
                scope="col"
                aria-label="Advanced"
                className={`d-md-none text-center border-left`}
                style={theaderStyle}
              >
                <FaChalkboardTeacher />
              </th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </Table>
      </Col>
    </Row>
  )
}
export default SkillTable

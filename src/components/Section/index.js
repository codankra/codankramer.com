import PropTypes from "prop-types"
import React from "react"
import styles from "./index.module.css"

const Section = ({sectionTitle, children}) => {
    return (
        <section className={`${sectionTitle} sectionDiv`} id={sectionTitle}>
            <h1 className={`${styles.sectionHeader} text-center`}>{sectionTitle}</h1>
            {children}
        </section>
    );   
}
Section.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    children: PropTypes.node
  }
  
  Section.defaultProps = {
    sectionTitle: ``,
  }
export default Section
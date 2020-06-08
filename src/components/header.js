import React from "react"

import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa"

const Header = ({siteTitle}) => (
  <StaticQuery query={graphql`
    query {
      indexImage: file(relativePath: {eq: "midstream.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => (
    <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <BackgroundImage
      fluid={data.indexImage.childImageSharp.fluid}
      className="header-img"
      fadeIn
    >
      <div className="header-overlay">
        <div className="header-content">
          <div className="header-text">
            <h1 className="fullname">Daniel Kramer</h1>
            <h5 className="role">Software Engineer</h5>
          </div>
          <div className="header-buttons">
            <a href="mailto:codankra@gmail.com">
            <button type="button" className="btn btn-lg btn-daniel"><FaEnvelope className="fanav"/>{` `}<span className="d-none d-xl-inline-flex">Email</span></button>
            </a>
            
            <a href="https://www.linkedin.com/in/codankramer">
            <button type="button" className="btn btn-lg btn-daniel"><FaLinkedin className="fanav"/>{` `}<span className="d-none d-xl-inline-flex">Linkedin</span></button>
            </a>
            
            <a href="https://www.github.com/codankra">
            <button type="button" className="btn btn-lg btn-daniel"><FaGithub className="fanav"/>{` `}<span className="d-none d-xl-inline-flex">Github</span></button>
            </a>
            <a 
            href="/daniel-kramer.pdf"
            // download="daniel-kramer-resume.pdf"
            >
              <button type="button" className="btn btn-lg btn-daniel"><FaFileAlt/>{` `}<span className="d-none d-xl-inline-flex">Resume</span></button>
            </a>
          </div>

        </div>
      </div>
    </BackgroundImage>
  </header>
  )}
   />

)


export default Header;

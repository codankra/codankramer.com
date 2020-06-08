import React from "react"
import Container from 'react-bootstrap/Container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Skills from "../components/Section/Skills"
import {FaInfoCircle} from "react-icons/fa"


const IndexPage = () => (
  <Layout>
    <SEO title="Me" />
    <Container fluid>
      {/* <FImage /> */}
      <Section sectionTitle="About Me">
        <h4 class="text-center">Hi, I'm Daniel! This personal site is a chance for me to carve out a personal space of the web
          and share my accomplishments and what I'm up to.</h4>
        <p class="text-center">I’m a hardworking <span className="highlight">computer science senior</span> at Stevens Institute of Technology, determined to constantly learn and have new experiences. </p>
        <p class="text-center">I'm looking a <span className="highlight">Front End</span>, <span className="highlight">Full Stack</span>, or <span className="highlight">Software Development</span> role starting after I graduate <span className="highlight">December 2020</span>.</p>
        <p class="text-center">My <span class="highlight">goal</span> is to be able to help teammates, companies, and clients meet their development goals efficiently and effectively.</p>
        <p class="text-center">My <span class="highlight">hobbies</span> include <span class="highlight">coding cool projects <FaInfoCircle /> (take a look!)</span>, strategy/simulation games, cooking (baking especially), reading, hiking/running/general fitness, and <span class="highlight">learning new skills</span>, such as...</p>
      </Section>
      <Skills />
      <Section sectionTitle="Projects">
        <h5>HI</h5>
      </Section>
    </Container>
    
  </Layout>
)

export default IndexPage

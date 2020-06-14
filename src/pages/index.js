import React from "react"
import Container from 'react-bootstrap/Container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Skills from "../components/Section/Skills"
import About from "../components/Section/About"
import Projects from "../components/Section/Projects"
import {FaInfoCircle} from "react-icons/fa"
import projectsList from "../projects.json"


const IndexPage = () => (
  <Layout>
    <SEO title="Me" />
    <Container fluid>
      <About />
      <Skills />
      <Projects {...projectsList}/>
    </Container>
    
  </Layout>
)

export default IndexPage;

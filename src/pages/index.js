import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/Section/Skills"
import About from "../components/Section/About"
import Projects from "../components/Section/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <Container fluid>
      <About />
      <Projects />
      <Skills />
    </Container>
  </Layout>
)

export default IndexPage

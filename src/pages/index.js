import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Cards />
    <Section />
  </Layout>
)

export default IndexPage

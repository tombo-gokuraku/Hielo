import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Cards from "../components/Cards"
import SectionTitle from "../components/SectionTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Cards />
    <SectionTitle />
  </Layout>
)

export default IndexPage

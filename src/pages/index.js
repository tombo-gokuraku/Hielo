import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Cards from "../components/Cards"
import SectionTitle from "../components/SectionTitle"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Button>Learn More</Button>
    <Cards />
    <SectionTitle />
  </Layout>
)

export default IndexPage

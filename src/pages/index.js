import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "./Hero"
import Cards from "./Cards"
import SectionTitle from "./SectionTitle"
import Button from "./Button"

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

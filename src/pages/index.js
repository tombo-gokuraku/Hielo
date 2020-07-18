import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Section from "../components/Section"
import Heading from "../components/Heading"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Cards />
    <Section bg>
      <Heading
        title="Morbi maximus justo"
        desc="NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA"
        white
      />
    </Section>
    <Section>
      <Heading
        title="Morbi maximus justo"
        desc="NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA"
      />
    </Section>
  </Layout>
)

export default IndexPage

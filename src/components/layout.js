/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Hero from "./Hero"
import Card from "./Card"
import SectionTitle from "./SectionTitle"
import Footer from "./Footer"

import Button from "./Button"

const Layout = () => {
  return (
    <>
      <main>
        <Hero></Hero>
        <Button>Learn More</Button>
        <Card />
        <SectionTitle />
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import Theme from "./Theme"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Theme>
      <main>{children}</main>
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

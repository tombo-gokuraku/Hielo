import React from "react"
import PropTypes from "prop-types"
import Theme from "./Theme"
import { Global, css } from "@emotion/core"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Theme>
      <Global
        styles={css`
          body {
            background-color: #f2f2f2;
          }
        `}
      />
      <main>{children}</main>
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

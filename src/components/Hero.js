import React from "react"
import PropTypes from "prop-types"
import Slider from "../components/slider"

import "twin.macro"

function Hero({ children }) {
  return (
    <div tw="relative">
      {children}
      <Slider />
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Hero

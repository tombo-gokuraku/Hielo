import React from "react"
import Slider from "../components/slider"

// import tw, { css } from "twin.macro"
import "twin.macro"

function Hero({ children }) {
  return (
    <div className="relative">
      {children}
      <Slider />
    </div>
  )
}

export default Hero

import React from "react"
import "twin.macro"
import Card from "./Card"
import Heading from "./Heading"

function Cards() {
  return (
    <Card>
      <Heading
        title="Lorem ipsum dolor"
        description="MAECENAS SAPIEN FEUGIAT EX PURUS"
        tw="text-black"
      />
    </Card>
  )
}

export default Cards

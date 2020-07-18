import React from "react"
import "twin.macro"
import Card from "./Card"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import Button from "./Button"

function Cards() {
  return (
    <Card>
      <div tw="flex flex-col items-center p-6 ">
        <Heading
          title="Lorem ipsum dolor"
          desc="MAECENAS SAPIEN FEUGIAT EX PURUS"
        />
        <Paragraph>
          Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis.
          Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra
          elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat
          malesuada.
        </Paragraph>
        <Button>Learn More</Button>
      </div>
    </Card>
  )
}

export default Cards

import React from "react"
import "twin.macro"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import Button from "./Button"

import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    pic02: file(relativePath: { eq: "pic02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pic03: file(relativePath: { eq: "pic03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Cards() {
  const data = useStaticQuery(query)
  const cardData = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      subTitle: "MAECENAS SAPIEN FEUGIAT EX PURUS",
      description:
        "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.",
      image: data.pic02.childImageSharp.fluid,
    },
    {
      id: 2,
      title: "Vestibulum sit amet",
      subTitle: "MATTIS ELEMENTUM SAPIEN PRETIUM TELLUS",
      description:
        "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.",
      image: data.pic03.childImageSharp.fluid,
    },
  ]
  return (
    <section tw="flex flex-wrap content-center justify-around pt-24 pb-16">
      {cardData.map(card => {
        return (
          <div tw="w-full mx-2 mb-6 max-w-screen-sm" key={card.id}>
            <Image fluid={card.image} tw="w-full" />
            <div tw="flex flex-col items-center p-6 bg-white">
              <Heading title={card.title} desc={card.subTitle} />
              <Paragraph>{card.description}</Paragraph>
              <Button>Learn More</Button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Cards

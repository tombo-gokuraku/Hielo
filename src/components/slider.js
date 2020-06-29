import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReactSlick from "react-slick"

const ComponentName = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { glob: "slide*.jpg" } }
        sort: { fields: relativePath, order: ASC }
      ) {
        images: nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  `)

  const slidesText = [
    {
      desc: `A free responsive web site template by <a href="https://templated.co">TEMPLATED</a>`,
      title: "Hielo",
    },
    {
      desc: `Lorem ipsum dolor sit amet nullam feugiat`,
      title: "Magna etiam",
    },
    {
      desc: `Sed cursus aliuam veroeros lorem ipsum nullam`,
      title: "Tempus dolor",
    },
    {
      desc: `Adipiscing lorem ipsum feugiat sed phasellus consequat`,
      title: "Etiam feugiat",
    },
    {
      desc: `Ipsum dolor sed magna veroeros lorem ipsum`,
      title: "Lorem adipiscing",
    },
  ]

  return (
    <ReactSlick {...sliderSettings}>
      {data.allFile.images.map((image, index) => {
        return (
          <article key={image.id}>
            <Image fluid={image.childImageSharp.fluid} tw="z-0" />
            <p tw="z-10">{slidesText[index].desc}</p>
            <h2 tw="z-10">{slidesText[index].title}</h2>
          </article>
        )
      })}
    </ReactSlick>
  )
}

export default ComponentName

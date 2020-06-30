import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"
import tw from "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReactSlick from "react-slick"

const Dots = styled.div`
  ${tw`absolute bottom-0 bg-transparent`}
  &&& {
    ul {
      ${tw`m-0`}
    }
  }
`
const Button = styled.div`
  &&& {
    ${tw`flex items-center justify-center w-2 h-2 p-0 mx-auto my-0 bg-white rounded-full opacity-25 active:opacity-100 hocus:opacity-100`}
  }
  .slick-active &&& {
    ${tw`opacity-100`}
  }
`

const Heading = styled.div`
  ${tw`flex flex-col items-center justify-center p-8`}
`

const Slider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <Dots>
        {" "}
        <ul>{dots}</ul>{" "}
      </Dots>
    ),
    customPaging: () => <Button></Button>,
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
          <BackgroundImage
            tag={`article`}
            fluid={image.childImageSharp.fluid}
            key={image.id}
          >
            <Heading>
              <p tw="text-xl text-center text-white">
                {slidesText[index].desc}
              </p>
              <h2 tw="text-6xl text-center text-white">
                {slidesText[index].title}
              </h2>
            </Heading>
          </BackgroundImage>
        )
      })}
    </ReactSlick>
  )
}

export default Slider

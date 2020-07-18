/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import tw, { css, styled } from "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReactSlick from "react-slick"

import Heading from "./Heading"

const Dots = styled.div`
  &&& {
    ${tw`absolute bottom-0 bg-transparent`}
    ul {
      ${tw`m-0`}
    }
  }
`
const Button = styled.div`
  &&& {
    ${tw`flex items-center justify-center w-3 h-3 p-0 mx-auto my-0 bg-white rounded-full opacity-25 active:opacity-100 hover:opacity-100`}
  }
  .slick-active &&& {
    ${tw`opacity-100`}
  }
`

const sliderDots = dots => (
  <Dots>
    {" "}
    <ul>{dots}</ul>{" "}
  </Dots>
)

const sliderCustomPaging = () => <Button></Button>

const Slider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: sliderDots,
    customPaging: sliderCustomPaging,
  }

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { glob: "slide*.jpg" } }
        sort: { fields: relativePath, order: ASC }
      ) {
        images: nodes {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 85) {
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
      desc: "A free responsive web site",
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
    <ReactSlick
      {...sliderSettings}
      css={[
        css`
          min-height: 75vh;
        `,
      ]}
    >
      {data.allFile.images.map((image, index) => {
        return (
          <BackgroundImage
            tag={`article`}
            fluid={image.childImageSharp.fluid}
            key={image.id}
            backgroundColor={`#999`}
            css={[
              css`
                min-height: 75vh;
                background-position: top center;
                background-blend-mode: darken;
              `,
              tw`bg-cover`,
            ]}
          >
            <Heading
              title={slidesText[index].title}
              desc={slidesText[index].desc}
              banner
            />
          </BackgroundImage>
        )
      })}
    </ReactSlick>
  )
}

export default Slider

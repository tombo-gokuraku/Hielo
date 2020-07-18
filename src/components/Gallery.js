import React from "react"
import Image from "gatsby-image"
import "twin.macro"

import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allFile(
      filter: { relativePath: { glob: "pic*.jpg" } }
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
`

function Gallery() {
  const data = useStaticQuery(query)
  return (
    <div tw="flex flex-wrap items-center justify-center">
      {data.allFile.images.map(image => {
        return (
          <a
            href="/"
            key={image.id}
            tw="w-full m-2 border-8 border-white rounded md:w-5/12"
          >
            <Image fluid={image.childImageSharp.fluid} />
          </a>
        )
      })}
    </div>
  )
}

export default Gallery

import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "pic02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Card({ image, description, children }) {
  const data = useStaticQuery(query)
  return (
    <div
      css={`
        max-width: 550px;
      `}
    >
      <Image fluid={data.file.childImageSharp.fluid} />
      {children}
      <p>{description}</p>
    </div>
  )
}

export default Card

/** @jsx jsx */
import { jsx } from "@emotion/core"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"

import PropTypes from "prop-types"

const query = graphql`
  {
    file(relativePath: { eq: "pic02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Card({ image, children }) {
  const data = useStaticQuery(query)
  return (
    <div tw="max-w-screen-sm">
      <Image fluid={data.file.childImageSharp.fluid} tw="w-full" />
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object,
}
export default Card

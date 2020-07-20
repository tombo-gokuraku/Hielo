/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import { css } from "twin.macro"

const query = graphql`
  {
    file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function Section({ children, bg }) {
  const data = useStaticQuery(query)
  return (
    <section>
      {bg ? (
        <BackgroundImage
          tag={`article`}
          fluid={[
            "radial-gradient(circle at center, rgba(0,0,0, 0.75), rgba(0,0,0, 0.75))",
            data.file.childImageSharp.fluid,
          ]}
          css={[
            css`
              background-position: center;
              background-size: cover;
              background-attachment: fixed;
            `,
          ]}
        >
          <div tw="pt-12 pb-8 mx-auto my-0 max-w-screen-xl">{children}</div>
        </BackgroundImage>
      ) : (
        <div tw="pt-12 pb-8 mx-auto my-0 max-w-screen-xl">{children}</div>
      )}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.bool,
}

export default Section

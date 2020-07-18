/** @jsx jsx */
import { jsx } from "@emotion/core"
import Heading from "../components/Heading"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import { css } from "twin.macro"

const query = graphql`
  {
    file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function SectionTitle() {
  const data = useStaticQuery(query)
  return (
    <section>
      <BackgroundImage
        tag={`article`}
        fluid={[
          "radial-gradient(circle at center, rgba(0,0,0, 0.45), rgba(0,0,0, 0.25))",
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
        <Heading
          title="Morbi maximus justo"
          desc="NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA"
          white
        />
      </BackgroundImage>
    </section>
  )
}

export default SectionTitle

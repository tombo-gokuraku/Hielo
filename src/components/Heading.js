import PropTypes from "prop-types"
/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { styled, css } from "twin.macro"

import { mq } from "../styles/breaks"

import Paragraph from "./Paragraph"

function Heading({ title, desc, banner, white }) {
  return (
    <div
      css={[
        css`
          min-height: inherit;
        `,
        tw`flex flex-col items-center justify-center p-2 divide-y`,
        banner && tw`p-8`,
      ]}
    >
      <Paragraph banner={banner} white={white}>
        {desc}
      </Paragraph>
      <Title banner={banner} white={white}>
        {title}
      </Title>
    </div>
  )
}

const Title = styled.h2(({ banner, white }) => [
  tw`text-lg font-light text-center sm:text-xl md:text-2xl lg:text-3xl`,
  banner &&
    css`
      font-size: 2rem;
      ${mq[0]} {
        font-size: 3.5rem;
      }
      ${mq[1]} {
        font-size: 4rem;
      }
      ${mq[2]} {
        font-size: 4.5rem;
      }
      ${mq[3]} {
        font-size: 5rem;
      }
      ${tw`text-white`};
    `,
  white && tw`text-white`,
])

Heading.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.bool,
  white: PropTypes.bool,
}
export default Heading

import PropTypes from "prop-types"
/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { styled, css } from "twin.macro"

import { mq } from "../styles/breaks"

function Heading({ title, desc, banner, white }) {
  return (
    <div
      css={[
        css`
          min-height: inherit;
        `,
        tw`flex flex-col items-center justify-center p-8 divide-y`,
      ]}
    >
      <Paragraph banner={banner}>{desc}</Paragraph>
      <Title banner={banner}>{title}</Title>
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
      ${tw`w-full text-white sm:w-2/3`};
    `,
  white && tw`text-white`,
])

const Paragraph = styled.p(({ banner }) => [
  tw`pb-2 font-light text-center text-gray-500 uppercase`,
  banner && tw`pb-6 text-base text-white text-opacity-75`,
])

Heading.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.bool,
  white: PropTypes.bool,
}
export default Heading

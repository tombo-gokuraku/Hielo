import React from "react"
import tw, { styled, css } from "twin.macro"

import { mq } from "../styles/breaks"

function Heading({ title, desc, linkUrl, linkText, large }) {
  return (
    <div
      css={[
        css`
          min-height: inherit;
        `,
        tw`flex flex-col items-center justify-center p-8 divide-y`,
      ]}
    >
      <p tw="pb-6 text-xl font-light text-center text-white uppercase text-opacity-75">
        {desc}{" "}
        {linkUrl && linkText && (
          <a tw="text-white text-opacity-100" href={linkUrl}>
            {linkText}
          </a>
        )}
      </p>
      {/* <div tw="w-1/2"></div> */}
      <Title large={large}>{title}</Title>
    </div>
  )
}

const Title = styled.h2(({ large }) => [
  tw`w-1/2 text-4xl font-light text-center text-white sm:text-6xl sm:w-2/3`,
  large &&
    css`
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
    `,
])

export default Heading

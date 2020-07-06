import React from "react"
import styled from "styled-components"
import tw, { css } from "twin.macro"
import breaks from "../styles/styled-breaks"
// ${tw`flex flex-col items-center justify-center p-8`}
// min-height: inherit;

function Heading({ title, desc, linkUrl, linkText, hero }) {
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
      <Title>{title}</Title>
    </div>
  )
}

const Title = styled.h2`
  ${tw`w-1/2 text-4xl font-light text-center text-white sm:text-6xl`}
  ${breaks.greaterThan("md")`
    font-size: 6rem;
`}
`

export default Heading

import React from "react"
import tw, { styled, css } from "twin.macro"

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
  tw`w-1/2 text-4xl font-light text-center text-white sm:text-6xl`,
  large &&
    css`
      font-size: 6rem;
    `,
])

export default Heading

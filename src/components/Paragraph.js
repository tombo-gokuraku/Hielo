import tw, { styled } from "twin.macro"
const Paragraph = styled.p(({ banner, white }) => [
  tw`pb-2 text-sm font-light text-center text-gray-700`,
  banner && tw`pb-2 text-base text-white uppercase text-opacity-75`,
  white && tw`text-gray-200`,
])

export default Paragraph

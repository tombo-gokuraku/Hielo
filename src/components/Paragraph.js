import tw, { styled } from "twin.macro"
const Paragraph = styled.p(({ banner }) => [
  tw`pb-2 text-sm font-light text-center text-gray-500`,
  banner && tw`pb-2 text-base text-white uppercase text-opacity-75`,
])

export default Paragraph

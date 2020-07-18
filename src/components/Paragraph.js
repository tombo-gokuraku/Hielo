import tw, { styled } from "twin.macro"
const Paragraph = styled.p(({ banner }) => [
  tw`pb-2 font-light text-center text-gray-500`,
  banner && tw`pb-6 text-base text-white uppercase text-opacity-75`,
])

export default Paragraph

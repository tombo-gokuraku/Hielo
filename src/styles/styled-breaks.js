import { generateMedia } from "styled-media-query"

const breaks = generateMedia({
  xs: "0",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
})

export default breaks

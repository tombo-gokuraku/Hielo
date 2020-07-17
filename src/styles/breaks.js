import facepaint from "facepaint"

const breakpoints = [640, 768, 1024, 1280]

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export const mqf = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

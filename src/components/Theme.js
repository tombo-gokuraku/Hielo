import React from "react"
import { ThemeProvider } from "emotion-theming"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config.js"

const { theme } = resolveConfig(tailwindConfig)

const Theme = props => <ThemeProvider {...props} theme={theme} />
export default Theme

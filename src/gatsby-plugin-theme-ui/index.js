// Package imports
import { swiss } from "@theme-ui/presets"

// Theme object
const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    background: "white",
    primary: "#CC0000",
    secondary: "#3B4CCA",
    tertiary: `#FFDE00`,
  },
  fonts: {
    ...swiss.fonts,
    body:
      "FlexoW01-Demi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  styles: {
    ...swiss.styles,
  },
}

export default theme

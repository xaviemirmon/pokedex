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
      "Exo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  styles: {
    ...swiss.styles,
    a: {
      ...swiss.styles.a,
      textDecoration: `none`,
      color: `secondary`,
      "&:hover": {
        textDecoration: `underline`,
      },
    },
  },
}

export default theme

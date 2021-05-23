/** @jsx jsx */
// ^^ is the pragma required for using the theme-ui sx prop on non-theme-ui elements

// Package imports
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, jsx } from "theme-ui"

const Header = () => (
  <header data-testid="header">
    <Box
      sx={{
        maxWidth: 512,
        mx: "auto",
        px: 3,
        py: 2,
        textAlign: "center",
      }}
    >
      <Link 
        to="/"
        sx={{
          fontSize: `0px`
        }}
      >
        <StaticImage
          src="../images/Pokedex_logo.png"
          width={300}
          quality={95}
          placeholder={"tracedSVG"}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Pokedex logo"
        />
        Pokedex home
      </Link>
    </Box>
  </header>
)

export default Header

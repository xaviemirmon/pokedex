// Package imports
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from "theme-ui"

const Header = () => (
  <header>
    <Box
      sx={{
        maxWidth: 512,
        mx: "auto",
        px: 3,
        py: 2,
        textAlign: "center",
      }}
    >
      <Link to="/">
        <StaticImage
          src="../images/Pokedex_logo.png"
          width={300}
          quality={95}
          placeholder={"tracedSVG"}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Pokedex logo"
        />
      </Link>
    </Box>
  </header>
)

export default Header

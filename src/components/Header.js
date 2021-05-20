import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from 'theme-ui'

const Header = () => (
  <header >
    <Box
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
        py: 4,
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StaticImage
            src="../images/Pokedex_logo.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Pokedex logo"
            style={{ marginBottom: `1.45rem` }}
          />
        </Link>
      </h1>
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/** @jsx jsx */

// Package Imports
import { Box, Card, Text, jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Theme import
import theme from "../gatsby-plugin-theme-ui/index"

export const PokemonCard = ({ id, name, number, image }) => {
  return (
    // Link to
    <Link
      to={name.toLowerCase()}
      sx={{
        textDecoration: `none`,
        color: `secondary`,
        "&:hover": {
          textDecoration: `underline`,
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 256,
          mx: `auto`,
        }}
      >
        {/* Pokemon image */}
        <Box
          sx={{
            width: `100%`,
          }}
        >
          <GatsbyImage
            image={image}
            sx={{
              maxWidth: `100%`,
              margin: `0 auto`,
            }}
            alt={name}
          />
        </Box>

        {/* Pokemon text */}
        <Text
          key={id}
          sx={{
            color: theme.colors.secondary,
          }}
        >
          {name} - {number}
        </Text>
      </Card>
    </Link>
  )
}

export default PokemonCard

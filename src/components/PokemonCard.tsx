/** @jsx jsx */
// ^^ is the pragma required for using the theme-ui sx prop on non-theme-ui elements

// Package Imports
import { Box, Card, Text, jsx } from "theme-ui"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Theme import
import theme from "../gatsby-plugin-theme-ui/index"

type PokemonCardPropsType = {
  id: string
  name: string
  number: number
  image: IGatsbyImageData
}

export const PokemonCard = ({ id, name, number, image }:PokemonCardPropsType ) => {
  return (
    // Link to pokemon page
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

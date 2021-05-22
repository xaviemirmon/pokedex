// Package Imports
import React from "react"
import { Box, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Theme
import theme from "../gatsby-plugin-theme-ui/index"

export const PokemonCard = ({ id, name, number, image }) => {
  return (
    <Link 
      to={name.toLowerCase()}
      sx={{
        textDecoration: `none`
      }}
    >
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <Box
          sx={{
            width: `100%`
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

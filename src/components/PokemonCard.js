import React from "react"
import { Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const PokemonCard = ({ id, name, number, image }) => {
  return (
    <Link to={name.toLowerCase()}>
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <GatsbyImage
          image={image}
          style={{
            maxWidth: `100%`,
          }}
        />
        <Text key={id}>
          {name} - {number}
        </Text>
      </Card>
    </Link>
  )
}

export default PokemonCard

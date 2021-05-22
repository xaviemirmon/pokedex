// Package imports
import React from "react"
import { graphql } from "gatsby"
import { Box } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

// Component Imports
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PokemonPage = ({ data }) => {
  const page = data.allPokemon.pokemon

  console.log(page)

  return (
    <Layout>
      <Seo title={page.name} />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          py: 4,
          textAlign: "center",
        }}
      >
        <h1>{page.name}</h1>
        <GatsbyImage
          image={page.imageFile.childImageSharp.gatsbyImageData}
          style={{
            maxWidth: `100%`,
          }}
          alt={page.name}
        />
        <h2>{page.number}</h2>
        <p>Max CP: {page.maxCP}</p>
        <p>Max HP: {page.maxHP}</p>
        <Box>
          <p>Weaknesses:</p>
          {page.weaknesses.map(result => (
            <p>{result}</p>
          ))}
        </Box>
        <Box>
          <p>Types:</p>
          {page.types.map(result => (
            <p>{result}</p>
          ))}
        </Box>
        <p>Max HP: {page.maxHP}</p>
      </Box>
    </Layout>
  )
}

export const pokemonPageQuery = graphql`
  query($id: String) {
    allPokemon {
      pokemon(id: $id) {
        id
        maxCP
        maxHP
        weaknesses
        types
        resistant
        number
        name
        fleeRate
        evolutionRequirements {
          amount
          name
        }
        attacks {
          fast {
            damage
            name
            type
          }
          special {
            damage
            name
            type
          }
        }
        image
        imageFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        classification
        weight {
          maximum
          minimum
        }
      }
    }
  }
`

export default PokemonPage

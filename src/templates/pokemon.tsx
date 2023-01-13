/** @jsx jsx */
// ^^ is the pragma required for using the theme-ui sx prop on non-theme-ui elements

// Package imports
import { graphql, Link, PageProps } from "gatsby"
import { Box, jsx } from "theme-ui"
import { IGatsbyImageData } from "gatsby-plugin-image"

// Component Imports
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PokemonFull from "../components/PokemonFull"

export type PokemonPageResultsType = {
  id: number
  maxCP: number
  maxHP: number
  weaknesses: string[]
  types: string[]
  resistant: string[]
  number: number
  name: string
  fleeRate: number
  evolutionRequirements: {
    amount: number
    name: string
  }
  attacks: {
    fast: {
      damage: number
      name: string
      type: string
    }[]
    special: {
      damage: number
      name: string
      type: string
    }[]
  }
  image: string
  imageFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  classification: string
  weight: {
    maximum: number
    minimum: number
  }
}

type test = {
  data: {
    allPokemon: {
      pokemon: PokemonPageResultsType
    }
  }
}

const PokemonPage = ({ data }: test) => {
  const page = data.allPokemon.pokemon

  return (
    <Layout>
      <Seo title={page.name} />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <PokemonFull page={page} />
        <Link
          to={`/`}
          sx={{
            textDecoration: `none`,
            color: `secondary`,
            "&:hover": {
              textDecoration: `underline`,
            },
          }}
        >
          Back to search
        </Link>
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
            gatsbyImageData(
              height: 250
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
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

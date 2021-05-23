/** @jsx jsx */
// ^^ is the pragma required for using the theme-ui sx prop on non-theme-ui elements

// Package imports
import { graphql, Link } from "gatsby"
import { Box, jsx } from "theme-ui"

// Component Imports
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PokemonFull from "../components/PokemonFull"

const PokemonPage = ({ data }) => {
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

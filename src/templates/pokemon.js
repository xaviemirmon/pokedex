// Package imports
import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Heading, Grid } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

// Component Imports
import Layout from "../components/Layout"
import Seo from "../components/Seo"

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
        <Grid
          gap={5}
          columns={[1, null, 2]}
          sx={{
            marginBottom: 4,
          }}
        >
          <Box>
            <h1>{page.name}</h1>
            <Heading as={`h2`}>{page.number}</Heading>
          </Box>
          <Box>
            <GatsbyImage
              image={page.imageFile.childImageSharp.gatsbyImageData}
              alt={page.name}
            />
          </Box>
        </Grid>

        <Grid
          gap={5}
          columns={[1, 2, 5]}
          sx={{
            marginBottom: 4,
          }}
        >
          {page.maxCP ? (
            <Box>
              <Heading as={`h3`}>Max CP</Heading>
              <p>{page.maxCP}</p>
            </Box>
          ) : null}

          {page.maxHP ? (
            <Box>
              <Heading as={`h3`}>Max HP</Heading>
              <p>{page.maxHP}</p>
            </Box>
          ) : null}

          {page.classification ? (
            <Box>
              <Heading as={`h3`}>Classification</Heading>
              <p>{page.classification}</p>
            </Box>
          ) : null}

          {page.fleeRate ? (
            <Box>
              <Heading as={`h3`}>Flee Rate</Heading>
              <p>{page.fleeRate}</p>
            </Box>
          ) : null}

          {page.weight ? (
            <Box>
              <Heading as={`h3`}>Weight</Heading>
              <p>
                Min. {page.weight.minimum} / Max. {page.weight.maximum
              </p>
            </Box>
          ) : null}
        </Grid>
        <Grid gap={5} columns={[1, 2, 6]}>
          {page.weaknesses ? (
            <Box>
              <Heading as={`h3`}>Weaknesses</Heading>
              {page.weaknesses.map(result => (
                <p key={result}>{result}</p>
              ))}
            </Box>
          ) : null}

          {page.types ? (
            <Box>
              <Heading as={`h3`}>Types</Heading>
              {page.types.map(result => (
                <p key={result}>{result}</p>
              ))}
            </Box>
          ) : null}

          {page.resistant ? (
            <Box>
              <Heading as={`h3`}>Resistant</Heading>
              {page.resistant.map(result => (
                <p key={result}>{result}</p>
              ))}
            </Box>
          ) : null}

          {page.attacks.fast ? (
            <Box>
              <Heading as={`h3`}>Attacks - Fast</Heading>
              {page.attacks.fast.map(result => (
                <p key={result.name}>
                  {result.name} (Damage: {result.damage} / Type: {result.type})
                </p>
              ))}
            </Box>
          ) : null}

          {page.attacks.special ? (
            <Box>
              <Heading as={`h3`}>Attacks - Special</Heading>
              {page.attacks.special.map(result => (
                <p key={result.name}>
                  {result.name} (Damage: {result.damage} / Type: {result.type})
                </p>
              ))}
            </Box>
          ) : null}

          {page.evolutionRequirements ? (
            <Box>
              <Heading as={`h3`}>Evolution Requirements</Heading>
              <p>
                {page.evolutionRequirements.name} (Amount:{" "}
                {page.evolutionRequirements.amount})
              </p>
            </Box>
          ) : null}
        </Grid>

        <Link to={`/`}>Back to search</Link>
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

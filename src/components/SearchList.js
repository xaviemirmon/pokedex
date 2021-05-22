// Package imports
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Button, Input, Box, Alert } from "theme-ui"

// Component imports
import { PokemonCard } from "./PokemonCard"

// Utilities imports
import { paginator } from "../utils/utils"
import theme from "../gatsby-plugin-theme-ui/index"

export const SearchList = () => {
  // Query to get Pokémons' teaser data
  const data = useStaticQuery(graphql`
    query GetSearchData {
      allPokemon {
        pokemons(first: 151) {
          name
          id
          number
          image
          imageFile {
            childImageSharp {
              gatsbyImageData(
                height: 180
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  // States
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const results = data.allPokemon.pokemons

  const filteredResults = paginator(
    results.filter(filter_data =>
      filter_data.name.toLowerCase().includes(query.toLowerCase())
    ),
    page,
    16
  )

  const paginationLinks = (number, current_page) => {
    let elements = []
    for (let i = 1; i <= number; i++) {
      if (current_page !== i) {
        elements.push(
          <Button
            onClick={() => setPage(i)}
            sx={{
              mx: 1,
              my: 1,
            }}
          >
            {i}
          </Button>
        )
      } else {
        elements.push(
          <Button
            onClick={() => setPage(i)}
            sx={{
              mx: 1,
              my: 1,
              background: theme.colors.secondary,
            }}
          >
            {i}
          </Button>
        )
      }
    }
    return elements
  }

  return (
    <>
      {/* Search bar */}
      <Input
        onChange={e => {
          setQuery(e.target.value)
          setPage(1)
        }}
        sx={{
          mx: "auto",
          marginBottom: 4,
          maxWidth: 800,
          textAlign: "center",
          fontFamily: theme.fonts.body,
        }}
        placeholder="Enter search text..."
      />

      {filteredResults.total_pages > 0 ? (
        <>
          {/* Pokemon grid */}
          <Grid
            gap={5}
            columns={[1, 2, 3, 4]}
            sx={{
              marginBottom: 4,
            }}
          >
            {filteredResults.data.map(result => (
              <PokemonCard
                id={result.id}
                name={result.name}
                number={result.number}
                image={result.imageFile.childImageSharp.gatsbyImageData}
              />
            ))}
          </Grid>

          {/* Pagination */}
          <Box className="pager">
            {/* Previous button */}
            {filteredResults.pre_page > 0 ? (
              <Button
                onClick={() => setPage(filteredResults.pre_page)}
                sx={{
                  mx: 2,
                  my: 1,
                }}
              >
                Previous
              </Button>
            ) : null}

            {/* Page links */}
            {paginationLinks(filteredResults.total_pages, filteredResults.page)}

            {/* Next Button */}
            {filteredResults.next_page > 0 ? (
              <Button
                onClick={() => setPage(filteredResults.next_page)}
                sx={{
                  mx: 2,
                  my: 1,
                }}
              >
                Next
              </Button>
            ) : null}
          </Box>
        </>
      ) : (
        // No results
        <Alert variant='secondary' mb={2}>
          Oops... No matches for&nbsp;<em>{query}</em>
        </Alert>
      )}
    </>
  )
}

export default SearchList

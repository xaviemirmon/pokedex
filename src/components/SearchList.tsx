// Package imports
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Button, Input, Box, Text } from "theme-ui"
import { IGatsbyImageData } from "gatsby-plugin-image"

// Component imports
import { PokemonCard } from "./PokemonCard"

// Utilities imports
import { paginator } from "../utils/utils"
import theme from "../gatsby-plugin-theme-ui/index"

export type PokemonCardResultsType = {
  id: string
  name: string
  number: number
  imageFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  } 
}


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

  // States: we're using React useState hooks to save and update data for the search
  const [query, setQuery] = useState("")
  const [page, setPage] = useState<number>(1)

  const results = data.allPokemon.pokemons

  const filteredResults = paginator(
    results.filter((filter_data: { name: string}) =>
      filter_data.name.toLowerCase().includes(query.toLowerCase())
    ),
    page,
    16
  )

  // Function to build out the pagination
  const paginationLinks = (number:number, current_page:number) => {
    let elements = []
    for (let i = 1; i <= number; i++) {
      if (current_page !== i) {
        elements.push(
          <Button
            key={i}
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
            key={i}
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
    <Box data-testid="SearchList">
      {/* Search bar */}
      <Box
        sx={{
          mx: "auto",
          marginBottom: 4,
        }}
      >
        <Input
          onChange={e => {
            setQuery(e.target.value)
            setPage(1)
          }}
          sx={{
            display: `inline`,
            textAlign: `center`,
            maxWidth: 800,
            fontFamily: theme.fonts.body,
            mx: 1,
            my: 1,
          }}
          placeholder="Enter search text..."
          value={query}
        />
        {query !== "" ? (
          <Button
            onClick={() => setQuery("")}
            sx={{
              marginLeft: 2,
              mx: 1,
              my: 1,
            }}
          >
            Reset
          </Button>
        ) : null}
      </Box>

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
            {filteredResults.data.map((result: PokemonCardResultsType)  => (
              // Individual result
              <PokemonCard
                key={result.id}
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
            {filteredResults.pre_page && filteredResults.pre_page > 0 ? (
              <Button
                onClick={() => setPage(filteredResults.pre_page as number)}
                sx={{
                  mx: 2,
                  my: 1,
                  background: theme.colors.tertiary,
                  color: theme.colors.text,
                }}
              >
                Previous
              </Button>
            ) : null}

            {/* Page links */}
            {paginationLinks(filteredResults.total_pages, filteredResults.page)}

            {/* Next Button */}
            {filteredResults.next_page && filteredResults.next_page > 0 ? (
              <Button
                onClick={() => setPage(filteredResults.next_page as number)}
                sx={{
                  mx: 2,
                  my: 1,
                  background: theme.colors.tertiary,
                  color: theme.colors.text,
                }}
              >
                Next
              </Button>
            ) : null}
          </Box>
        </>
      ) : (
        // No results
        <Text>
          Oops... No matches for&nbsp;<em>{query}</em>
        </Text>
      )}
    </Box>
  )
}

export default SearchList

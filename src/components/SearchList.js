import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Button, Input, Box } from "theme-ui"

import { PokemonCard } from "./PokemonCard"

import { paginator } from "../utils/utils"

export const SearchList = () => {
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
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

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

  const paginationLinks = number => {
    let elements = []
    for (let i = 1; i <= number; i++) {
      elements.push(<Button onClick={() => setPage(i)}>{i}</Button>)
    }
    return elements
  }

  return (
    <div>
      <Input
        onChange={e => {
          setQuery(e.target.value)
          setPage(1)
        }}
      />
      {filteredResults.total_pages > 0 ? (
        <>
          <Grid gap={5} columns={[2, null, 4]}>
            {filteredResults.data.map(result => (
              <PokemonCard
                id={result.id}
                name={result.name}
                number={result.number}
                image={result.imageFile.childImageSharp.gatsbyImageData}
              />
            ))}
          </Grid>

          <Box className="pager">
            {filteredResults.pre_page > 0 ? (
              <Button onClick={() => setPage(filteredResults.pre_page)}>
                Previous
              </Button>
            ) : null}
            {paginationLinks(filteredResults.total_pages)}
            {console.log(filteredResults)}
            {filteredResults.next_page > 0 ? (
              <Button onClick={() => setPage(filteredResults.next_page)}>
                Next
              </Button>
            ) : null}
          </Box>
        </>
      ) : (
        <p>
          Oops... No matches for <em>{query}</em>
        </p>
      )}
    </div>
  )
}

export default SearchList

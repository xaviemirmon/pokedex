
import React from "react"
import { graphql } from "gatsby"
import { Box } from 'theme-ui'

import Layout from "../components/Layout"
import Seo from "../components/Seo"


const PokemonPage = ({ data }) => {

  const page = data.allPokemon.pokemon

  console.log(page)

  return (
    <Layout>
      <Seo title="Home" />
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 3,
          py: 4,
          textAlign: 'center'
        }}>
          <h1>{page.name}</h1>
          {page.number}
      </Box>
      
    </Layout>
  )
}


export const pokemonPageQuery = graphql`
  query ($id: String) {
    allPokemon {
      pokemon(id: $id) {
        id
        name
        number
        maxHP
        maxCP
      }
    }
  }
`

export default PokemonPage




